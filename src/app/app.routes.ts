import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "teams", component: TeamsComponent },
    { path: "**", component: ErrorPageComponent },
];
