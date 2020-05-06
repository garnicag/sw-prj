import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit{
  @Input() title: string;
  @Input() url: string;
  public poster;

  ngOnInit() {
    this.poster = `/assets/pictures/characters/${this.characterID(this.url)}.jpg`;
  }

  characterID(url): number {
    const id = url.split('/');
    return id[id.length - 2];
  }
}
