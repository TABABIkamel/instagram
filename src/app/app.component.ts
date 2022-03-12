import { Component } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  show:number
constructor(private spinner: NgxSpinnerService) {
}
    tabWinners:string[] = ['ka_mel1234','ali','xyz','mmmm']
    tab:string[]=new Array();
    tabUrls:string[]=new Array();
    tabImages:string[]=[
    'https://res.cloudinary.com/dhum7apjy/image/upload/v1647016044/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris_mhfhlw.jpg',
    'https://res.cloudinary.com/dhum7apjy/image/upload/v1647102428/t%C3%A9l%C3%A9chargement_kmkiam.jpg',
    'https://res.cloudinary.com/dhum7apjy/image/upload/v1647102420/image_ev1qog.jpg',
    'https://res.cloudinary.com/dhum7apjy/image/upload/v1647015989/cld-sample.jpg'];

  disable=false

  i:number=0
  async showSpinner(name: string) {
    this.spinner.show(name).then(r => console.log('yes'));
    setTimeout(() => {
      if(this.i==this.tabWinners.length-1)
        this.disable=true
      console.log(this.i)
      console.log(JSON.stringify(this.tab))
      this.spinner.hide(name)
      this.tab.push(this.tabWinners[this.i])
      this.tabUrls.push(`https://www.instagram.com/${this.tabWinners[this.i]}`)
      console.log(JSON.stringify(this.tabUrls))
      this.i=this.i +1;
    }, 5000);
  }
}
