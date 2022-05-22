import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newad',
  templateUrl: './newad.component.html',
  styleUrls: ['./newad.component.css']
})
export class NewadComponent implements OnInit {

  kategoriak: any[] = [];
  errorMessage = ""
  model: any = {
    "kategoriaId": null,
    "leiras": "",
    "hirdetesDatuma": new Date().toISOString().substring(0, 10),
    "tehermentes": true,
    "kepUrl": ""
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:5000/api/kategoriak").subscribe({
      next: (data: any[]) => this.kategoriak = data,
      error: (error) => this.errorMessage = error.message
    })
  }

  kuld() {
    this.model.kategoriaId = Number(this.model.kategoriaId)
    this.http.post<any>("http://localhost:5000/api/ujingatlan", this.model).subscribe({
      next: (data) => this.router.navigate(["/offers"]),
      error: (error) => this.errorMessage = error.message
    })
  }

}
