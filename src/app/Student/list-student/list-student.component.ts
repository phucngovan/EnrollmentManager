import { Component, OnInit } from '@angular/core';
import {Student} from '../../student';
import {StudentService} from '../../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents(): void {
    this.studentService.getStudent().subscribe(data => this.students = data);
  }
  deleteStudents(student: Student): void {
    this.studentService.deleteStudent(student)
      .subscribe( data => {
        this.students = this.students.filter(u => u !== student);
      });
  }

}
