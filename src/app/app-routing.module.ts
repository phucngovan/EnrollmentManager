import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStudentComponent} from './Student/list-student/list-student.component';
import {AddStudentComponent} from './Student/add-student/add-student.component';
import {EditStudentComponent} from './Student/edit-student/edit-student.component';

const routes: Routes = [
  {path: 'list-student',
  component: ListStudentComponent},
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'edit-student',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
