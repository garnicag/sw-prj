import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit{
  @Input() name: string;
  @Input() terrain: string;

  public firstTerrain;

  ngOnInit() {
    this.firstTerrain = this.terrain.split(',');
    this.firstTerrain = this.firstTerrain[0].split(' ').join('');
  }
}
