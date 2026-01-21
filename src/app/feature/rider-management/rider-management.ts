import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rider-management',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './rider-management.html',
  styleUrl: './rider-management.css'
})
export class RiderManagement {
  activeRiderSubModule = signal('onboarding');
  searchQuery = signal('');

  // Mock data for onboarding queue
  pendingRiders = signal([
    { id: 'RID-501', name: 'Amit Verma', vehicle: 'Two-Wheeler', docs: 'Aadhar, DL Pending' },
    { id: 'RID-502', name: 'Suresh Kumar', vehicle: 'Tata Ace', docs: 'All Uploaded' }
  ]);

  // Mock data for Attendance/Status
  riderAttendance = signal([
    { name: 'Vikram Singh', status: 'Online', battery: '85%', lastSync: '2 mins ago' },
    { name: 'Rohan Das', status: 'Offline', battery: '12%', lastSync: '1 hour ago' },
    { name: 'Priya Mani', status: 'In-Transit', battery: '44%', lastSync: 'Just now' }
  ]);

  // Search logic for attendance
  filteredAttendance = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.riderAttendance().filter(r => r.name.toLowerCase().includes(query));
  });
}