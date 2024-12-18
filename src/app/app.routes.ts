import { Routes } from '@angular/router';
import { FormatterComponent } from './features/formatter/formatter.component';
import { TestingComponent } from './features/testing/testing.component';
import { DebuggingComponent } from './features/debugging/debugging.component';
import { FrontendComponent } from './features/frontend/frontend.component';

export const routes: Routes = [
  { path: 'formatter', component: FormatterComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'debugging', component: DebuggingComponent },
  { path: 'frontend', component: FrontendComponent },
  { path: '', redirectTo: '/formatter', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/formatter' }, // Fallback for invalid URLs
];
