import express from 'express'
import { StatusCodes } from 'http-status-codes';
import { boardRouter } from './boardRoute.js';

const Router = express.Router();

// Check APIs v1/status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs V1 are ready to use.' });
})
// Boards APIs v1/boards
Router.use('/boards', boardRouter);

export const APIs_V1 = Router;