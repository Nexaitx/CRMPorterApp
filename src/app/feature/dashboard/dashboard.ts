import { Component, signal, computed } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  activeDrivers = signal(142);
  pendingOrders = signal(28);
  dailyRevenue = signal(5420);

  // Bar Chart Configuration: Delivery Volume
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Deliveries Completed', backgroundColor: '#3b82f6' }
    ]
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    resizeDelay: 50,
    maintainAspectRatio: false,
  };
}
