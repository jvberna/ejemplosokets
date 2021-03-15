import { Socket } from "socket.io";


export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', ()=> {
        console.log('Cliente desconectado: ',cliente.id);
    })
}

export const saludo = (cliente: Socket) => {
    cliente.on('saludo', ()=> {
        console.log('Recibidio SALUDO de: ',cliente.id);
    })
}