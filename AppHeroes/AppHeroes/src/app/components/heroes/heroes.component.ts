import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroe:Heroe[]=[]
  constructor(private _heroesService: HeroesService) {}

 

  ngOnInit(): void {
   this.heroe=this._heroesService.getHeroe()
   console.log(this.heroe)
  }

}
