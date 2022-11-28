import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ResponseHandler {
  constructor() {}
  ResponseWithError(
    res: Response,
    statusCode: number,
    data: any,
    error: Error,
    errorCode: number,
  ) {
    if (!error) {
      return res.status(statusCode).json({
        message: 'success',
        data: data,
      });
    } else {
      return res.status(errorCode).json({
        message: error.message,
        data: [],
      });
    }
  }
}
