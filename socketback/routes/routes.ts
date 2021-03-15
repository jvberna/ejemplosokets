import { Router, Request, Response} from 'express';

const router= Router();

router.get('/mensajes', (req: Request, res: Response)=> {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    console.log(cuerpo);
    res.json({
        ok: true,
        mensaje: 'MENSAJE GET - Todo esta bien',
        cuerpo,
        de
    })
})

router.post('/mensajes/:id', (req: Request, res: Response)=> {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    console.log(cuerpo);
    
    res.json({
        ok: true,
        mensaje: 'MENSAJE POST - Todo esta bien',
        cuerpo,
        de,
        id
    })
})

export default router;