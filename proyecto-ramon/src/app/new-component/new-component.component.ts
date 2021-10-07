import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  isCollapsed: boolean;
  constructor() {
    this.isCollapsed = true;
   }
   listOfPosition: string[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
title: string = "";

  ngOnInit(): void {
    this.isCollapsed;
  }

}
