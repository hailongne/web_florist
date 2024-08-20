import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterModule, DashboardComponent],
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss'],
})
export class LayoutAdminComponent {}
