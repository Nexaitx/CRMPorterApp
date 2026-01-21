import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-client-management',
  imports: [MatIconModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './client-management.html',
  styleUrl: './client-management.css'
})
export class ClientManagement {
  activeClientSubModule = signal('individual');

  customers = signal([
    { name: 'Aditi Rao', phone: '+91 98765-43210', complaints: 0, address: 'Indiranagar, BLR' },
    { name: 'Karan Mehra', phone: '+91 91234-56789', complaints: 2, address: 'Powai, Mumbai' }
  ]);

  corporateClients = signal([
    { company: 'Urban Ladder', poc: 'Rajesh', cycle: 'Monthly', status: 'Active' },
    { company: 'Local Woodworks', poc: 'Sumeet', cycle: 'Weekly', status: 'Overdue' }
  ]);
}