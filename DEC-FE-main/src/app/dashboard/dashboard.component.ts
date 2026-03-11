import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit, OnDestroy {
  currentDate: Date = new Date(); // Initialise avec la date actuelle
  private intervalId: any; // Pour gérer l'intervalle

  monthlyStats = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    data: [150, 200, 180, 220, 300, 250, 400, 450, 300, 320, 310, 500]
  };
  chartData = {
    crs: [50, 30, 20], // Exemple : Trois catégories CRS
    tr: [40, 35, 25], // Exemple : Trois catégories TR
    dc: [45, 25, 30], // Exemple : Trois catégories DC
    ds: [30, 40, 30]  // Exemple : Trois catégories DS
  };

  ngOnInit(): void {
    // Met à jour la date et l'heure chaque seconde
    this.intervalId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngAfterViewInit(): void {
    // Initialisation du graphique des transactions mensuelles (déjà existant)
    const ctx = document.getElementById('monthlyChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.monthlyStats.labels,
        datasets: [
          {
            label: 'Transactions Mensuelles',
            data: this.monthlyStats.data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });

    // Initialisation des 4 camemberts
    this.initChart('pieChartCRS', 'Type CRS', [10, 20, 30]); // Exemple de données pour CRS
    this.initChart('pieChartTR', 'Type TR', [15, 25, 10]);  // Exemple de données pour TR
    this.initChart('pieChartDC', 'Type DC', [12, 18, 24]);  // Exemple de données pour DC
    this.initChart('pieChartDS', 'Type DS', [20, 15, 25]);  // Exemple de données pour DS
  }

  ngOnDestroy(): void {
    // Nettoie l'intervalle pour éviter les fuites de mémoire
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  private initChart(chartId: string, label: string, data: number[]): void {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'], // Ajustez les labels si nécessaire
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: [
              'rgba(135, 206, 250, 0.8)', // Bleu ciel clair
              'rgba(175, 238, 238, 0.8)', // Bleu ciel moyen
              'rgba(192, 192, 192, 0.8)'  // Gris clair
            ],
            hoverBackgroundColor: [
              'rgba(135, 206, 250, 1)', // Bleu ciel clair (plus vif au survol)
              'rgba(175, 238, 238, 1)', // Bleu ciel moyen (plus vif au survol)
              'rgba(192, 192, 192, 1)'  // Gris clair (plus vif au survol)
            ],
            hoverOffset: 4, // Espacement au survol
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#333', // Couleur du texte de la légende
            }
          }
        },
        maintainAspectRatio: true // Garder un ratio cohérent
      }
    });
  }


}
