import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
//import router from './routes'
const app = express()

app.use(express.json())
app.use(cors())
//app.use(router)
app.get('/', (req, res) => res.status(200).send('Rodando Aqui!'))
//app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  //return res.status(500).json( {message: err.message} )
  //next()
//})

export default app;