import { Component, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-logistics-admin',
  imports: [CommonModule,
    FormsModule,
    CurrencyPipe,
  MatButtonModule],
  templateUrl: './logistics-admin.html',
  styleUrl: './logistics-admin.css',
})
export class LogisticsAdmin {
// Navigation State
  activeModule = signal('city-onboarding');

  // 1. City Onboarding State
  cities = signal([{ name: 'Mumbai', status: 'Active', hubs: 12 }]);
  
  // 2. Pricing Rules State
  pricing = signal({ base: 50, perKm: 12, perMin: 2, surge: 1.2 });

  // 3. Rider KYC Queue
  pendingRiders = signal([
    { id: 'R-101', name: 'Rahul S.', docs: 'Pending', type: 'Bike' },
    { id: 'R-102', name: 'Amit K.', docs: 'Under Review', type: 'Truck' }
  ]);

  // 4. SLA & Penalty Engine
  penaltyRules = signal([
    { trigger: 'Late Delivery (>15m)', penalty: 20, type: 'Fixed' },
    { trigger: 'Order Cancellation', penalty: 5, type: 'Percentage' }
  ]);

  // 5. Settlement Data
  payouts = signal([
    { rider: 'Rahul S.', total: 4500, status: 'Processing' },
    { rider: 'John D.', total: 3200, status: 'Paid' }
  ]);

  changeModule(name: string) { this.activeModule.set(name); }
}
