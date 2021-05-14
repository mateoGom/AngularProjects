import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  heroe:any={}
  constructor(
    private activatedRouter: ActivatedRoute,
    private heroeService: HeroesService
  ) {}

  ngOnInit(): void {
   this.activatedRouter.params.subscribe(params=>{
     this.heroe=this.heroeService.getHeroe(params['id'])
   })
  }
}
