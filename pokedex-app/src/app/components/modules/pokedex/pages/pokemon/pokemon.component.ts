import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  private sub: any;
  id: number | undefined;
  name : string | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
   });

   this.activatedRoute.data.subscribe(
    response => {
      this.name = response['pokemon'].name;
      console.log(response);
    }
  );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
