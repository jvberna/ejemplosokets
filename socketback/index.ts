import Server from './clases/server';
import router from './routes/routes';
import express from 'express';
import cors from 'cors';

const nombre='Jose Vicente Berná'
console.log(`Hola ${nombre}`);

const server = Server.instance;

server.app.use(express.urlencoded({extended: true}));
server.app.use(express.json());
server.app.use(cors());
 
// Rutas de servicios
server.app.use('/', router);

server.start(()=>{
    console.log(`Servidor corriendo en puerto ${server.port}`);
}) 

