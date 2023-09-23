import express, { Router } from 'express';


const router: Router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({message: 'Rota de autenticação!'})
})

export default router;