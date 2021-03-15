import express from 'express';
import { SERVER_PORT } from '../globals/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as misocket from '../sockets/sockets';

export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    public httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = http.createServer(this.app); //  Server( this.app );
        this.io = require('socket.io')(this.httpServer , {  // Hay que poner literalmente las cabeceras CORS
            cors: {
              origin: "http://localhost:4200",
              methods: ["GET", "POST"]
            }
        });
        
        this.escucharSockets();

    }

    public static get instance() {
        return this._instance || (this._instance = new Server());
    }

    private escucharSockets(){
        console.log('Escuchando sockets');
        this.io.on('connection', cliente => {
            console.log('Cliente conetado:',cliente.id);

            // desconectar
            misocket.desconectar(cliente);
            misocket.saludo(cliente);
            /*cliente.on('disconnect', () => {
                console.log('Cliente desconectado ',cliente.id);
            })*/
        })
    }

    start( callback: any) {
        this.httpServer.listen( this.port, callback);
    }
} 