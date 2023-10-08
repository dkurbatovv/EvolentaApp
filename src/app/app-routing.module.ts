import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ErrorComponent } from './error/error.component';
import { AccessRoleGuard } from './access-role.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    pathMatch: 'full',
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'posts',
    component: UserListComponent,
    canActivateChild: [AccessRoleGuard],
    children: [
      {
        path: ':id',
        component: UserProfileComponent,
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
