import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss'],
})
export class ShowTimeComponent implements OnInit {
  //? Private Variables
  clock: Date = new Date();
  currSeason: string = 'Seasons';
  isDark: boolean = true;
  intervalId: any = null;
  imgUrl = 'assets/imgs/seasons/seasons.png';

  ngOnInit(): void {
    this.getSeasonName();
    this.setSeasonImg();
    this.setTimer();
  }
  ngOnDestroy(): void {
    this.clearTimer();
  }

  setTimer() {
    this.intervalId = setInterval(() => {
      this.clock = new Date();
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  onToggleIsDark() {
    this.isDark = !this.isDark;
  }

  setIsDarkTitle() {
    return `Change to ${this.isDark ? 'light' : 'dark'}`;
  }

  getSeasonName() {
    const month = this.clock.getMonth();
    switch (month) {
      case 11:
      case 0:
      case 1:
        return (this.currSeason = 'Winter');
      case 2:
      case 3:
      case 4:
        return (this.currSeason = 'Spring');
      case 5:
      case 6:
      case 7:
        return (this.currSeason = 'Summer');
      case 8:
      case 9:
      case 10:
        return (this.currSeason = 'Autumn');
      default:
        return (this.currSeason = 'Invalid Month');
    }
  }

  setSeasonImg() {
    return (this.imgUrl = `assets/imgs/seasons/${this.currSeason.toLowerCase()}.png`);
  }
}
