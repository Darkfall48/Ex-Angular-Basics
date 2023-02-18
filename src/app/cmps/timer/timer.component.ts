import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() counter!: number;
  @Input() startedRedColor!: number;
  @Output() due = new EventEmitter<string>();

  ngOnInit(): void {
    this.onDone();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter']) {
      this.onDone();
    }
  }

  onDone() {
    if (this.counter <= 0) this.due.emit('Eggs are ready! 🍳');
  }

  setTimerColor() {
    if (this.counter <= this.startedRedColor) {
      return 'red blink';
    }
    return;
  }
}
