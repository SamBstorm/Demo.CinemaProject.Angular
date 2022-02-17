import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFilm } from 'src/app/models/ifilm';
import { CinemaAPIService } from 'src/app/services/cinema-api.service';

@Component({
  selector: 'app-filmcreate',
  templateUrl: './filmcreate.component.html',
  styleUrls: ['./filmcreate.component.scss']
})
export class FilmcreateComponent implements OnInit {

  public myFormulaire! : FormGroup;

  constructor(private _api : CinemaAPIService,
    private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.myFormulaire = this._fb.group(
      {
        titre : [null,Validators.required],
        date : [Date.now(), Validators.required]
      }
    );
  }

  public save(){
    console.log(this.myFormulaire);
    let data : IFilm = {
      titre : this.myFormulaire.controls['titre'].value,
      dateSortie : this.myFormulaire.controls['date'].value
    };
    this._api.Post(data).subscribe((d)=> console.log(data));
  }

}
