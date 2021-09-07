import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fruits: string[] = ['fraise'];
  @ViewChild('myinput') public el!: ElementRef<HTMLInputElement>;

  public addFruit() {
    this.fruits.push(this.el.nativeElement.value);
    this.el.nativeElement.value = '';
  }

  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }
}
