import { Component, OnInit } from '@angular/core';
import { IFilm } from 'src/app/models/ifilm';
import { CinemaAPIService } from 'src/app/services/cinema-api.service';

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.scss']
})
export class FilmlistComponent implements OnInit {

  public films : IFilm[] = [];

  constructor(private _api : CinemaAPIService) { }

  ngOnInit(): void {
    this._api.GetAll().subscribe(
      (data) => {
        this.films = data;
        console.log(this.films); // on obtiens la liste de Films, car c'est quand on a un résultat que la fonction s'active
      },
      (error) => console.error(error),
      ()=>console.log('Récupération de films fini...')
    );
    console.log(this.films);// donne [] car pas encore rempli, le subscribe est asynchrone
  }

}
