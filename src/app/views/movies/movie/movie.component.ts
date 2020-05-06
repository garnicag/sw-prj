import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
  @Input() title: string;
  @Input() url: string;
  public poster;

  ngOnInit() {
    this.poster = `/assets/pictures/films/${this.movieID(this.url)}.jpg`;
  }

  movieID(url): number {
    const id = url.split('/');
    return id[id.length - 2];
  }
}
