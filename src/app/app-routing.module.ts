import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path:'', 
    pathMatch:'full', 
    component: DefaultComponent,
    children: []
  },
  { 
    path: 'test1',
    pathMatch: 'full',
    component: Test1Component,
    children: []
  },
  { 
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
