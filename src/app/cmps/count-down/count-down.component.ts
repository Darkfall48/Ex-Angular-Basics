import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  //? Private Variables
  isStarted: boolean = false;
  counter: number = 90 * 1000;
  startedCounter: number = 0;
  intervalId: any = null;
  audio: HTMLAudioElement = new Audio('assets/audio/timer/timer.mp3');

  ngOnInit() {
    this.startedCounter = this.counter;
  }

  ngOnDestroy(): void {
    this.onClearInterval();
  }

  onClearInterval() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  onResetTimer() {
    if (this.intervalId) this.onClearInterval();
    this.counter = this.startedCounter;
  }
  onStartTimer() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => this.onDecrease(), 1000);
  }
  onDecrease() {
    this.counter = this.counter - 1000;
  }
  done(msg: string) {
    console.log(msg);
    this.audio.play();
    this.onClearInterval();
    this.counter = 0;
  }
}
