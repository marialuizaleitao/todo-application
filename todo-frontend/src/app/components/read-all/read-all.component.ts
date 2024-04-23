import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Todo[] = [];
    
  constructor(private sevice: TodoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.sevice.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }

}
