import { Routes } from '@angular/router';
import { Login } from './layout/login/login';
import { MainLayout } from './layout/main-layout/main-layout'; // Import the new layout
import { LandingPage } from './layout/landing-page/landing-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // 1. PUBLIC ROUTES (No Sidebar)
    {
        path: 'home',
        component: LandingPage,
        title: 'Home'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login'
    },
    {
        path: 'signup',
        loadComponent: () => import('./layout/signup/signup').then(m => m.Signup),
        title: 'Create Account'
    },

    // 2. PROTECTED ROUTES (Has Sidebar)
    // We use a parent route that loads the Layout Component
    {
        path: '', 
        component: MainLayout, 
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./feature/dashboard/dashboard').then(m => m.Dashboard),
                title: 'Dashboard'
            },
            {
                path: 'profile',
                loadComponent: () => import('./feature/profile/profile').then(m => m.Profile),
                title: 'Profile'
            },
            {
                path: 'settings',
                loadComponent: () => import('./feature/settings/settings').then(m => m.Settings),
                title: 'Settings'
            },
            {
                path: 'logistics-admin',
                loadComponent: () => import('./feature/logistics-admin/logistics-admin').then(m => m.LogisticsAdmin),
                title: 'Logistics Admin'
            },
            // You can add more pages here that share the same sidebar
            // { path: 'profile', loadComponent: ... }
        ]
    },

    // Catch-all
    {
        path: '**',
        redirectTo: 'login'
    }
];