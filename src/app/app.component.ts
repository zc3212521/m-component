import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-component';

  show = false;

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
}
