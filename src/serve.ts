import express,{ Application} from "express";
import taskRouter from "./routes/index.routes";
import cors from "cors";
import path from "path";

export class Serve{
    private _port: string | number;
    private _nameApp: string;
    private _api: Application;
    private _host:string;
    constructor(host: string,port: string | number,name: string){
        this._host=host;
        this._port=port;
        this._nameApp=name;
        this._api= express();
        this.initMiddleware();
        this.initRoute();
    }

    private initMiddleware(){
        this._api.use(express.json())
        this._api.use(express.urlencoded({extended:true}))
        this._api.use(express.static(path.join(__dirname,'public')))
        this._api.use(cors())
       // this._api.use(morgan("dev"))
    }

    private initRoute(){
        this._api.use("/task",taskRouter)
    }

    public initServer(){
        this._api.set('trust proxy',this._host)
        this._api.listen(this._port,()=>
        console.log(`server of ${this._nameApp}init on host: ${this._host} and listen on port:${this._port}`))
    }   
}