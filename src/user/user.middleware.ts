import { NextFunction, Request, Response } from 'express';

export async function userMiddleware(req:Request,Res:Response,next:NextFunction) {
  console.log("vfdvfdv");
  next()
  
}
