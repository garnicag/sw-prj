import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
  @Input() title: string;
  public poster;
  public posters = {
    anewhope: '/assets/posters/iv.jpg',
    theempirestrikesback: '/assets/posters/v.jpg',
    returnofthejedi: '/assets/posters/vi.jpg',
    thephantommenace: '/assets/posters/i.jpg',
    attackoftheclones: '/assets/posters/ii.jpg',
    revengeofthesith: '/assets/posters/iii.jpg',
    theforceawakens: '/assets/posters/vii.jpg'
  };

  ngOnInit() {
    this.poster = this.posters[this.title.split(' ').join('').toLowerCase()];
  }
}
