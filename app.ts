import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';
import routes from './routes';

// import { json } from 'body-parser'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

// app.use(cors())
app.use(express.json())


app.use('/api/v1/data', routes);
// auth
// app.use('/api/v1/auth', auth);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
