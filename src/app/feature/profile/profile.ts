import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  imports: [MatButtonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
isEditing = signal(false);
  
  // Mock Porter Data
  porter = signal({
    name: 'Alex Johnson',
    id: 'PRT-9920',
    status: 'Active',
    rating: 4.8,
    trips: 1240,
    vehicle: 'Mercedes Sprinter (XYZ-123)',
    joinedDate: 'Oct 2023',
    walletBalance: 450.25
  });

  toggleEdit() {
    this.isEditing.update(val => !val);
  }
}
