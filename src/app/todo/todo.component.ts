import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todoListArray: any[]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    /**
     * load database change in real time
     */
    this.todoService.getTodoList().snapshotChanges()
      .subscribe(item => {
        this.todoListArray = []
        item.forEach(element => {
          var json = element.payload.toJSON()
          json["$key"] = element.key
          this.todoListArray.push(json)
        })

        this.todoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked
        })
      })
  }

  /**
   * saves todo list items to the db
   * @param title accepts the todo list item 
   */
  onAdd(title) {
    this.todoService.addTitle(title.value)
    title.value = null
  }

  /**
   * updates the todolist item to be checked or unchecked
   * @param $key primary key of the item; auto-generated
   * @param isChecked boolean true or false
   */
  alterCheck($key: string, isChecked) {
    this.todoService.checkOrUncheckTitle($key, !isChecked)
  }

  /**
   * removes an item from the database
   * @param $key primary key of the item; auto-generated
   */
  deleteItem($key){
    this.todoService.removeTitle($key)
  }

}
