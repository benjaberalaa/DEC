import { Component, Input } from '@angular/core';

interface TimelineStep {
  id: number;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  @Input() currentPhase: number = 1;

  steps: TimelineStep[] = [
    { id: 1, label: 'Création période', icon: 'bi-calendar-plus' },
    { id: 2, label: 'Injection de données', icon: 'bi-file-earmark-excel' },
    { id: 3, label: 'Validation des corrections', icon: 'bi-check2-all' },
    { id: 4, label: 'Clôture période', icon: 'bi-lock-fill' }
  ];

  get progressWidth(): number {
    if (this.currentPhase <= 1) return 0;
    if (this.currentPhase >= this.steps.length) return 100;
    return ((this.currentPhase - 1) / (this.steps.length - 1)) * 100;
  }
}
