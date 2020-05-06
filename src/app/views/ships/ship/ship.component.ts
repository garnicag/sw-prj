import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit{
  @Input() title: string;
  @Input() url: string;
  public poster;

  ngOnInit() {
    this.poster = `/assets/pictures/starships/${this.shipID(this.url)}.jpg`;
  }

  shipID(url): number {
    const id = url.split('/');
    return id[id.length - 2];
  }
}
