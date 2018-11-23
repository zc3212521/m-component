import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-component';

  show = false;

  showAll = false;
  showAll2 = false;

  showModal(): void {
    this.show = true;
  }

  closeModal(): void {
    console.log('closed');
    this.show = false;
  }

  handleOk(): void {
    console.log('click ok');
    this.show = false;
  }

  toggleShow(): void {
    this.showAll = !this.showAll;
  }
  toggleShow2(): void {
    this.showAll2 = !this.showAll2;
  }

  prient(): void {
    console.log(666)
  }

}
