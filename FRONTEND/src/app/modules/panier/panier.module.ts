import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from 'src/app/panier/panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PanierComponent }
]

@NgModule({
  declarations: [PanierComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})

export class PanierModule { }
