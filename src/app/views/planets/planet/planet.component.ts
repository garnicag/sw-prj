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
  public terrains = {
    acidpools: '#D6FFAF',
    ash: '#BABDB6',
    barren: '#2E3436',
    bogs: '#005037',
    canyons: '#CE4700',
    caves: '#071A20',
    cliffs: '#543C29',
    desert: '#D3983A',
    deserts: '#D3983A',
    fields: '#266C11',
    forests: '#092600',
    glaciers: '#56DCE9',
    grasslands: '#266C11',
    hills: '#396C11',
    icecanyons: '#729FCF',
    icecaves: '#002863',
    islands: '#C17D11',
    jungles: '#081D0B',
    lakes: '#1C68D7',
    lavarivers: '#CC2C00',
    mesas: '#818F02',
    mountain: '#396C11',
    mountainranges: '#396C11',
    mountains: '#396C11',
    oceans: '#205F87',
    plains: '#888A85',
    plateaus: '#888A85',
    rainforests: '#002626',
    reefs: '#472C94',
    rivers: '#3454A4',
    rockarches: '#364E56',
    rockydeserts: '#5B3E10',
    savanna: '#748364',
    savannahs: '#748364',
    savannas: '#748364',
    seas: '#205F87',
    sinkholes: '#2C251A',
    swamps: '#124437',
    tundra: '#9ADEFD',
    urban: '#2E3436',
    valleys: '#4C7C1F',
    vines: '#335D0B',
    airlessasteroid: '#1B1100',
    cities: '#2E3436',
    cityscape: '#2E3436',
    fungusforests: '#741111',
    gasgiant: '#AD7FA8',
    grass: '#266C11',
    grassyhills: '#266C11',
    jungle: '#081D0B',
    ocean: '#205F87',
    rock: '#364E56',
    rocky: '#364E56',
    rockycanyons: '#364E56',
    rockyislands: '#364E56',
    scrublands: '#6D946B',
    swamp: '#124437',
    toxiccloudsea: '#C128B4',
    unknown: '#FFFFFF',
    verdant: '#4E9A06',
    volcanoes: '#FF4100'
  };

  ngOnInit() {
    this.firstTerrain = this.terrain.split(',');
    this.firstTerrain = this.firstTerrain[0].split(' ').join('');
    this.firstTerrain = this.terrains[this.firstTerrain];
  }
}
