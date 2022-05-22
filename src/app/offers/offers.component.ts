import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  displayedColumns: string[] = ["kategoriaNev", "leiras", "hirdetesDatuma", "tehermentes", "kepUrl"];
  dataSource: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:5000/api/ingatlan").subscribe({
      next: (data: any[]) => this.dataSource = data,
      error: (error) => console.error(error)

    })
  }

}
