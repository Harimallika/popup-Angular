import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popup';
  show = false;
  openpopup(){
    this.show = true;
  }
  closepopup(){
    this.show = false;
  }
  closeoverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.show = false;
    }
  }
}
