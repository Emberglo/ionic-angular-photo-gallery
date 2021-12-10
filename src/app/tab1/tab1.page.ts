import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public variable = 100;

  public value = 0;

  public array = [];

  constructor() {}

  public add(): void {
    this.variable += this.value;
    this.array.push(this.variable);
  }

  public subtract(): void {
    this.variable -= this.value;
    this.array.push(this.variable);
  }

  public getIsNegative(num: number): boolean {
    return num < 0;
  }
}
