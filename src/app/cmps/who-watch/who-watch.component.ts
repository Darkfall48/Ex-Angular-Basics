import { Component, OnInit } from '@angular/core';
import { Watcher } from 'src/app/models/watcher.model';

@Component({
  selector: 'who-watch',
  templateUrl: './who-watch.component.html',
  styleUrls: ['./who-watch.component.scss'],
})
export class WhoWatchComponent implements OnInit {
  constructor() {}

  isSelected: boolean = false;
  watcherSelected: any = null;

  watcher1 = {
    _id: 'w-101',
    name: 'John Doe',
    bgImage: 'blue',
    shows: [
      {
        name: 'The Walking Dead',
        showUrl: 'https://www.imdb.com/title/tt1520211/',
        imgUrl:
          'https://fr.web.img5.acsta.net/c_310_420/pictures/22/08/29/18/20/3648785.jpg',
      },
      {
        name: 'Simpsons',
        showUrl: 'https://www.imdb.com/title/tt0096697',
        imgUrl:
          'https://fr.web.img3.acsta.net/c_310_420/pictures/20/10/01/11/26/1905965.jpg',
      },
    ],
  };
  watcher2 = {
    _id: 'w-102',
    name: 'Jane Doe',
    bgImage: 'red',
    shows: [
      {
        name: 'Naruto',
        showUrl: 'https://www.imdb.com/title/tt0409591/',
        imgUrl:
          'https://fr.web.img6.acsta.net/c_310_420/pictures/19/08/02/15/12/4423178.jpg',
      },
      {
        name: 'Futurama',
        showUrl: 'https://www.imdb.com/title/tt0149460/',
        imgUrl:
          'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/78/30/52/19784883.jpg',
      },
    ],
  };
  watcher3 = {
    _id: 'w-103',
    name: 'Jaster Doe',
    bgImage: 'green',
    shows: [
      {
        name: 'You',
        showUrl: 'https://www.imdb.com/title/tt7335184/',
        imgUrl:
          'https://fr.web.img5.acsta.net/c_310_420/pictures/22/11/25/09/18/2999342.jpg',
      },
      {
        name: 'Re:Zero',
        showUrl: 'https://www.imdb.com/title/tt5607616/',
        imgUrl:
          'https://fr.web.img3.acsta.net/c_310_420/pictures/20/04/17/15/18/4142036.jpg',
      },
    ],
  };

  watchers: Watcher[] = [this.watcher1, this.watcher2, this.watcher3];

  ngOnInit(): void {}

  trackByFn(idx: number, item: any) {
    return item._id;
  }
}
