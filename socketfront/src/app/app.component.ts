import { Component } from '@angular/core';
import { WebsocketsService } from './services/websockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socketfront';

  constructor( public wsService: WebsocketsService){

  }

  enviar(){
    this.wsService.emitir('saludo')
  }

}
