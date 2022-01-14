import {Request,Response} from 'express'

export const resSuccess=(req:Request,res:Response,message:any,status:number)=>{

    let statusCode: number = status || 200;
    let content: unknown = message || '';

    res.status(statusCode).send({
        error:false,
        status:statusCode,
        body:content,
    });
}

export const resError=(req:Request,res:Response,message:any,status:number)=>{
    let statusCode:number = status || 500;
    let content:unknown = message || 'Internal sever error';
    
    res.status(statusCode).send({
        error:true,
        status:statusCode,
        body:content,
    });

}

