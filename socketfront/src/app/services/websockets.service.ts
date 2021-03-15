import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  public socketStatus = false;

  socket = io(environment.wsUrl);

  constructor( ) {
      this.checkStatus();
     }
  
  checkStatus() {
    this.socket.on('connect', ()=> {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', ()=> {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emitir(evento: string, payload?:any, callback?: Function) {
    this.socket.emit(evento, payload, callback);
  }
    
}
