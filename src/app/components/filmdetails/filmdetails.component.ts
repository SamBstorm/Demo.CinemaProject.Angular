import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilm } from 'src/app/models/ifilm';
import { CinemaAPIService } from 'src/app/services/cinema-api.service';

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.scss']
})
export class FilmdetailsComponent implements OnInit {

  public film! : IFilm;
  constructor(private _api : CinemaAPIService, 
    private _activeRoute : ActivatedRoute,
    private _router : Router
    ) { }

  ngOnInit(): void {
    let ref : string = this._activeRoute.snapshot.params['id'];
    let id : number = parseInt(ref.substring(0, ref.indexOf('-')));
    this._api.GetOne(id).subscribe((data)=> this.film = data,
    (error) => this._router.navigateByUrl(""));
  }

}
