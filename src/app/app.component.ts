import { Component,trigger,animate,style,transition,keyframes } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger("moveInLeft",[
       transition("void=> *",[style({transform:"translateX(300px)"}),
         animate(200,keyframes([
          style({transform:"translateX(300px)"}),
          style({transform:"translateX(0)"})
  
           ]))]),
 
 transition("*=>void",[style({transform:"translateX(0px)"}),
         animate(100,keyframes([
          style({transform:"translateX(0px)"}),
          style({transform:"translateX(300px)"})
  
           ]))])    
      
     ])
 
 ]
    
})
export class AppComponent {

  public todoList:String[]=[];
  
  addTodo(item){
    this.todoList.push(item);
  }

  deleteItem(item){
    for(var i=0; i<=this.todoList.length;i++){
      if(item ==this.todoList[i]){
        this.todoList.splice(i,1);
      }
    }
  }

  
}
