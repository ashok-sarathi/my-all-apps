import { Component, OnInit } from '@angular/core';
import { StudentService } from '@app/modules/app-common/service/student.service';

@Component({
  selector: 'as-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(result => {
      console.log(result);
    });
  }

}
