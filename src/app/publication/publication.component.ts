import { Component, OnInit } from '@angular/core';
import {InstaService} from "../services/insta.service";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
nombreJaime:any
  urlInsta:string
  show: boolean=false;
  constructor(private service:InstaService) { }

  ngOnInit(): void {

  }

  clickEvent() {
    this.service.getNombreJaime(this.urlInsta).subscribe((res)=>{
      console.log(JSON.stringify(res))
      this.nombreJaime=res.search
      this.show=true
    })
  }
}
