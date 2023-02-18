import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'who-watch',
  templateUrl: './who-watch.component.html',
  styleUrls: ['./who-watch.component.scss'],
})
export class WhoWatchComponent implements OnInit {
  constructor() {}

  isSelected: boolean = false;
  watcherSelected: any = null;
  watchers = [
    {
      _id: 'w-101',
      name: 'John Doe',
      bgImage: 'blue',
      shows: [
        {
          name: 'The Walking Dead',
          imgUrl:
            'https://fr.web.img5.acsta.net/c_310_420/pictures/22/08/29/18/20/3648785.jpg',
        },
        {
          name: 'Simpsons',
          imgUrl:
            'https://fr.web.img3.acsta.net/c_310_420/pictures/20/10/01/11/26/1905965.jpg',
        },
      ],
    },
    {
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
          imgUrl:
            'https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/78/30/52/19784883.jpg',
        },
      ],
    },
  ];

  ngOnInit(): void {}

  trackByFn(idx: number, item: any) {
    return item._id;
  }
}
