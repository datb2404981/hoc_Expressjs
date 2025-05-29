import { StatusCodes } from 'http-status-codes';
import { boardService } from '../services/boardService.js';

const creatNew = async (req, res, next) => {
  try {
    
    //Điều hướng dự liệu sang tầng Service
    const createdBoard = await boardService.creatNew(req.body);

    //có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdBoard);
  } catch (error) { next(error) }
}


export const boardController = {
  creatNew
}