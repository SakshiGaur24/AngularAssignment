import { Component, Input } from '@angular/core';
import { TodosComponent } from 'ng-freshers/src/app/todo/todos/todos.component';
import { Todo } from 'ng-freshers/src/app/03_pipes/models/todo.interface';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
 @Input
 ('data')data:Todo;
 lastcolorref:any;
 
  test(ref){
   console.log(ref)
   if(this.lastcolorref!=null)
   {
     this .lastcolorref.classList.remove('active');
   }
   ref.classList.add('active');
   this.lastcolorref=ref;
  }
}
