import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  @Input() counter!: number;
  @Input() startedRedColor!: number;
  @Input() isStarted!: boolean;
  @Output() due = new EventEmitter<string>();
  @Output() changeCounter = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter']) {
      this.onDone();
    }
  }

  onDone() {
    if (this.counter <= 0) this.due.emit('Eggs are ready! 🍳');
  }

  onChangeCounter(ev: any) {
    const [minutes, seconds] = ev.split(':');
    const newCounter = (+minutes * 60 + +seconds) * 1000;
    console.log('newCounter :>> ', newCounter);
    if (!isNaN(newCounter)) {
      this.counter = newCounter;
      this.changeCounter.emit(newCounter);
    }
  }

  setTimerColor() {
    if (this.counter / 1000 <= this.startedRedColor) {
      return 'red blink';
    }
    return;
  }
}
