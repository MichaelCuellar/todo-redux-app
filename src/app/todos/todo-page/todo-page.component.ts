import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.redcur';
import { toggleTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  state: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  todos(){
    this.state = !this.state;
    this.store.dispatch(toggleTodo({estado:this.state}));
  }

}
