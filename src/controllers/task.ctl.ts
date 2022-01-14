import {Request,Response} from "express";
import {Task,TaskModel} from '../models/task.model';
import {resSuccess,resError} from '../responseHttp/response';
import http from "../utils/statusHttp";

const taskModel = new TaskModel();

export const getAllTask=(req:Request,res:Response)=>{
    let tasks = taskModel.all();
    resSuccess(req,res,tasks,http.OK)
}

export const newTask=(req:Request,res:Response)=>{
 try {
    taskModel.save(req.body);
    resSuccess(req,res,{"message":"Save a new task"},http.OK)
 } catch (error) {
     resError(req,res,{"message":"not create a new task"},http.INTERNAL_SERVER_ERROR)
 }
}

export const getTask=(req :Request,res:Response)=>{
    let task = taskModel.findById(req.params.id);
    resSuccess(req,res,task,http.OK)
}