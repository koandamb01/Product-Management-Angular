import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NewComponent } from './components/new/new.component';
import { EditComponent } from './components/edit/edit.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent, children: [
      { path: '', pathMatch: 'full', component: ProductsHomeComponent },
      { path: 'new', component: NewComponent },
      { path: 'edit/:id', component: EditComponent },
    ]
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
// { path: '**', component: PageNotFoundComponentComponent },