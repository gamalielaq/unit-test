import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit,
  AfterContentChecked, OnDestroy, AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, OnDestroy, AfterViewChecked {

  constructor() { 
    console.log('constructor'); 
  }

  ngOnInit() {
    console.log('OnChanges');
  }
  ngOnChanges(){
    console.log('OnChanges');
  }
  ngDoCheck(){
    console.log('DoCheck');
  }
  ngAfterContentInit(){
    console.log('AfterContentInit');
  }
  ngAfterViewInit(){
    console.log('AfterViewInit');
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecke');
  }
}
