import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  title = 'application';
    data :any=[]
   constructor(private http:HttpClient ){
     this.http.get("http://localhost:3000/data").subscribe((res)=>{
       this.data=res
     })
   }
}
