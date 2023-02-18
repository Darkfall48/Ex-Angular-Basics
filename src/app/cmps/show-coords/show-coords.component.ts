import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'show-coords',
  templateUrl: './show-coords.component.html',
  styleUrls: ['./show-coords.component.scss'],
})
export class ShowCoordsComponent {
  //? Private Variables
  isOn: boolean = true;
  pos = { x: 0, y: 0 };

  @HostListener('document:mousemove', ['$event'])
  handleMouseMove(event: any = null) {
    if (this.isOn && event) {
      this.pos = { x: event.clientX, y: event.clientY };
    }
  }

  handleToggle() {
    this.isOn = !this.isOn;
    // if (!this.isOn) {
    //   this.pos = { x: 0, y: 0 };
    // }
  }
}
