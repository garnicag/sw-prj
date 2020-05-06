import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit{
  @Input() title: string;
  @Input() url: string;
  public poster;

  ngOnInit() {
    this.poster = `/assets/pictures/species/${this.specieID(this.url)}.jpg`;
  }

  specieID(url): number {
    const id = url.split('/');
    return id[id.length - 2];
  }
}
