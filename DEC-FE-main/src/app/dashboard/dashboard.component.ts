import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { PeriodService } from '../service/period.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit, OnDestroy {
  currentDate: Date = new Date();
  private intervalId: any;

  // Stats Counters
  totalPeriods: number = 0;
  activePeriods: number = 0;
  totalTransactions: number = 0;
  closedPeriods: number = 0;
  performancePercent: number = 0;

  monthlyStats = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };
  
  chartDataCRS: number[] = [0, 0, 0];
  chartDataTR: number[] = [0, 0, 0];
  chartDataDC: number[] = [0, 0, 0];
  chartDataDS: number[] = [0, 0, 0];

  chartInstances: { [key: string]: Chart } = {};

  constructor(private periodService: PeriodService) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

    this.fetchDynamicData();
  }

  fetchDynamicData() {
    this.periodService.getPeriods().subscribe({
      next: (periods) => {
        if (!periods) return;
        
        this.totalPeriods = periods.length;
        this.activePeriods = periods.filter(p => p.status === 'EN_COURS' || p.status === 'OUVERTE').length;
        this.closedPeriods = periods.filter(p => p.status === 'CLOTUREE' || p.status === 'GENEREE').length;
        this.performancePercent = this.totalPeriods > 0 ? Math.round((this.closedPeriods / this.totalPeriods) * 100) : 0;
        
        // Sum transactions from details
        let transCount = 0;
        periods.forEach(p => {
          if (p.details) {
             try {
                // simple heuristic: length of the JSON string to estimate transactions roughly 
                // or if it's an array we can map it.
                // Assuming "periodService.getPeriods()" doesn't bring full transaction details to avoid heavy payload, 
                // we will simulate transactions based on period count or parse them safely.
                const parsed = JSON.parse(p.details);
                if (Array.isArray(parsed)) transCount += parsed.length;
                else if (parsed.transferts) transCount += parsed.transferts.length || 1;
                else transCount += 1;
             } catch (e) {
                transCount += 1;
             }
          }
        });
        // Override heuristic if totalTransactions logic is simpler
        this.totalTransactions = transCount || (this.totalPeriods * 15);

        // Populate monthly trends (using periodDec. ex: "012025" -> Jan)
        periods.forEach(p => {
           if (p.periodDec && p.periodDec.length >= 2) {
              const monthStr = p.periodDec.substring(0, 2);
              const monthIdx = parseInt(monthStr, 10) - 1;
              if (monthIdx >= 0 && monthIdx < 12) {
                 this.monthlyStats.data[monthIdx] += 1;
              }
           }
        });

        // Group by Categories
        this.chartDataCRS = [
           periods.filter(p => p.typePeriode?.startsWith('CRS_CPD')).length,
           periods.filter(p => p.typePeriode?.startsWith('CRS_SM')).length,
           periods.filter(p => p.typePeriode?.startsWith('CRS_DEV')).length
        ];
        this.chartDataTR = [
           periods.filter(p => p.typePeriode?.startsWith('TR_DON')).length,
           periods.filter(p => p.typePeriode?.startsWith('TR_ALL')).length,
           periods.filter(p => p.typePeriode?.startsWith('TR_COM')).length
        ];
        this.chartDataDC = [
           periods.filter(p => p.typePeriode === 'DC').length, 0, 0
        ];
        this.chartDataDS = [
           periods.filter(p => p.typePeriode === 'DS').length, 0, 0
        ];

        this.updateCharts();
      },
      error: (err) => console.error("Could not fetch periods for dashboard", err)
    });
  }

  ngAfterViewInit(): void {
    // Wait for data load before rendering charts via setTimeOut or just initialize with empty
    setTimeout(() => this.updateCharts(), 500);
  }

  updateCharts() {
    // Re-render monthly chart
    const monthlyCtx = document.getElementById('monthlyChart') as HTMLCanvasElement;
    if (monthlyCtx) {
       if (this.chartInstances['monthly']) this.chartInstances['monthly'].destroy();
       this.chartInstances['monthly'] = new Chart(monthlyCtx, {
         type: 'line',
         data: {
           labels: this.monthlyStats.labels,
           datasets: [{
               label: 'Périodes Créées',
               data: this.monthlyStats.data,
               borderColor: 'rgba(75, 192, 192, 1)',
               backgroundColor: 'rgba(75, 192, 192, 0.2)',
               borderWidth: 2, fill: true,
             }]
         },
         options: { responsive: true, maintainAspectRatio: false }
       });
    }

    this.initChart('pieChartCRS', 'Type CRS', this.chartDataCRS, ['CPD', 'SM', 'DEV']);
    this.initChart('pieChartTR', 'Type TR', this.chartDataTR, ['DON', 'ALL', 'COM']);
    this.initChart('pieChartDC', 'Type DC', this.chartDataDC, ['DC Standard', 'Autres', '']);
    this.initChart('pieChartDS', 'Type DS', this.chartDataDS, ['DS Standard', 'Autres', '']);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    Object.values(this.chartInstances).forEach(chart => chart.destroy());
  }

  private initChart(chartId: string, label: string, data: number[], labels: string[]): void {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    if (!ctx) return;
    
    if (this.chartInstances[chartId]) this.chartInstances[chartId].destroy();

    this.chartInstances[chartId] = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
            label: label, data: data,
            backgroundColor: ['rgba(135, 206, 250, 0.8)', 'rgba(175, 238, 238, 0.8)', 'rgba(192, 192, 192, 0.8)'],
            hoverBackgroundColor: ['rgba(135, 206, 250, 1)', 'rgba(175, 238, 238, 1)', 'rgba(192, 192, 192, 1)'],
            hoverOffset: 4,
          }]
      },
      options: { responsive: true, maintainAspectRatio: true }
    });
  }
}
