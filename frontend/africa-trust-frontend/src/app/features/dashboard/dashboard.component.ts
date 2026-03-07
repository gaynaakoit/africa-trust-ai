import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  lineChartLabels = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  lineChartData = [
    {
      data: [12, 19, 30, 45, 50, 65, 80],
      label: 'Analyses'
    }
  ];

  pieChartLabels = [
    'Deepfake',
    'Identity',
    'Trust Score',
    'Signature'
  ];

  pieChartData = [
    {
      data: [40, 25, 20, 15]
    }
  ];

}