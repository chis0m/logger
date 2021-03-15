import express from "express";
import expressValidator from 'express-validator';
import { Server } from "typescript-rest";
import routes from './routes';
import env from './config';
import cors from "cors";

// Create global app object
let app: express.Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressValidator());
app.use('/api', routes)
app.get('/', (req: express.Request, res: express.Response) => res.status(200).send({ message: 'Welcome to Logger' }));
app.use('*', (req: express.Request, res: express.Response) => res.status(404).json({
    status: 404,
    error: 'Not Found: Check your URL or HTTP request method',
}));

Server.buildServices(app);

// Just checking if given PORT variable is an integer or not
let port = parseInt(env.PORT || "");
if (isNaN(port) || port === 0) {
    port = 3000;
}

app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Server Started at PORT: ${port}`);
});

export default app;