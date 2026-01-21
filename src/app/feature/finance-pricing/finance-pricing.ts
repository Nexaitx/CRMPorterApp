import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-finance-pricing',
  imports: [MatIconModule,
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './finance-pricing.html',
  styleUrl: './finance-pricing.css',
})
export class FinancePricing {
activeFinanceSubModule = signal('rate-cards');
  
  surgeMultiplier = signal(1.5); // Default 1.5x during surge
}
