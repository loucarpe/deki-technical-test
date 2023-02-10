import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors());
const port = 8080;

// Route exemple
app.get('/helloworld', (_req: Request, res: Response) => {
	res.json({ message: 'Hello World !' });
});

// Make a route /users here
// Don't forget to use the user type

// Bonus:
// - Make a second route /user/id to get one user
// - Make a route to update an user /user/id

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
