import express,{ Application } from "express";

export class Serve{
    private _port: string | number;
    private _nameApp: string;
    private _api: Application;
    constructor(name: string,port: string | number){
        this._port=port;
        this._nameApp=name;
        this._api= express();
    }

    public initServer(){
        this._api.listen(this._port,()=>
        console.log(`server of ${this._nameApp} listen on port:${this._port}`))
    }
    
}