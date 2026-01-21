import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-dispatch',
  imports: [MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './order-dispatch.html',
  styleUrl: './order-dispatch.css',
})
export class OrderDispatch {
  searchQuery: string = '';
  activeOrderSubModule = signal('live');

  unassignedOrders = signal([
    { id: 'ORD-101', customer: 'Global Mart', pickup: 'Downtown', type: 'Truck', time: '10 mins ago' },
    { id: 'ORD-102', customer: 'Fast Electronics', pickup: 'Airport Hub', type: '3-Wheeler', time: '22 mins ago' },
    { id: 'ORD-103', customer: 'Tech Solutions', pickup: 'Business District', type: 'Van', time: '5 mins ago' },
    { id: 'ORD-104', customer: 'Fast Electronics', pickup: 'Airport Hub', type: '3-Wheeler', time: '22 mins ago' }
  ]);
}
