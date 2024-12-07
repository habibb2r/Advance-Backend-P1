/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Application, NextFunction, Request, Response, } from 'express';
import cors from 'cors';
import { StudentRoutes } from './Modules/Student/student.route';
import { UserRoutes } from './Modules/User/user.route';
import globalErrorHandler from './Middlewares/globalErrorHandler';
const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

//routes

app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});



app.use(globalErrorHandler)
export default app;
