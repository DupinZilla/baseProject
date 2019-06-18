import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book/book-form/book-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceClassComponent } from './service-class/service-class.component';
import { ComponentClassComponent } from './component-class/component-class.component';
import { ToDosComponent } from './to-dos/to-dos.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: './book/book.module#BookModule'
  },
  { path: 'components', component: ComponentClassComponent },
  { path: 'services', component: ServiceClassComponent },
  {path: 'toDos', component: ToDosComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
