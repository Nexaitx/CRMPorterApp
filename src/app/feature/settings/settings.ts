import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
  MatButtonModule,],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  // Current active section
  activeSection = signal<'general' | 'dispatch' | 'pricing' | 'security'>('general');

  // Form State Signals
  autoAssign = signal(true);
  maxRadius = signal(15); // km
  baseFare = signal(5.00);

  sections = [
    { id: 'general', label: 'General', icon: '⚙️' },
    { id: 'dispatch', label: 'Dispatch Rules', icon: '🚚' },
    { id: 'pricing', label: 'Fees & Pricing', icon: '💰' },
    { id: 'security', label: 'Security & Roles', icon: '🔒' }
  ];

  setSection(id: any) {
    this.activeSection.set(id);
  }
}