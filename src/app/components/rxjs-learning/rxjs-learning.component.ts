import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rxjs-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.scss'
})
export class RxjsLearningComponent implements OnInit, AfterViewInit{

//console.log(data);



 agents:Observable<string> | undefined;
  agentName:string='';
  studentList=["Ajay", "Vijay", "Binu"];
  students$:Observable<any>=from(this.studentList);
  studentObj={
    id:10,
    name:"Anu",
    grade:"B"
  }
  student$:Observable<any>=of(this.studentObj);
  
  @ViewChild('validate') validate?:ElementRef;
  @ViewChild('getLink') getLink?:ElementRef;

  constructor(){

 }
 
 ngOnInit(): void {
  
   this.agents = new Observable(
    function(observer){
      try{
        observer.next("Ram");
        observer.next("mark");
        observer.next("sita");
      }
      catch(e){
        observer.error(e);
      }
    }
   );
   this.agents.subscribe(data=>{
    //console.log(data);
    this.agentName=data;
   })
   this.student$.subscribe(data=>{
    //console.log(data);
   })
   this.students$.subscribe(data=>{
    //console.log(data);
   })
 }
 ngAfterViewInit(): void {

}
 rxjsEventObservable() {
  const btnObservable$=fromEvent(this.validate?.nativeElement, 'click');
  btnObservable$.subscribe(data=>{
     console.log(data);
   })
  }
  getEventObservable() {
    const linkObservable$=fromEvent(this.getLink?.nativeElement, 'mouseover')
    linkObservable$.subscribe(data=>{
      console.log(data);
    })
  }
}



// debounce
// form control
// dependency injection