import fs from 'fs';
import path from 'path';

/**
 * interface Task
 */
export interface Task{
    id:string | number;
    name:string;
    description: string;
    status:boolean;
}
/**
 * Task model
 */
export class TaskModel{
    private _name:string;
    private _dataDir:string;
    private _dataPath:string;
    constructor (){
        this._name='db'
        this._dataDir='../dataBase/';
        this._dataPath = path.resolve(__dirname,`${this._dataDir}${this._name}.json`)
        this.dbVerify();
    }
    public dbVerify(){
        let result:boolean = fs.existsSync(this._dataPath);
        if(!result){
            fs.writeFileSync(this._dataPath,'')
        }   
    }

    /**
     * read on db
     * @returns array of task
     */
    private readJsonFile(){
        let fileContents = fs.readFileSync(this._dataPath,'utf-8');
        if (fileContents){
            return JSON.parse(fileContents)
        }
        return [];
    }
    /**
     * write on json file
     * @param data of type Task
     */
    private writeJsonFile(data:Task){
        let jsonData = JSON.stringify(data,null,' ');
        fs.writeFileSync(this._dataPath,jsonData);
    }
    /**
     * 
     * @param task object with content a new task 
     * @returns 
     */
    public save(task:Task):number{
        try {
            let tasks = this.readJsonFile();
            tasks.push(task);
            this.writeJsonFile(tasks);
            return Number(task.id);
            
        } catch (error) {
            console.log(error)
            return 0;
        }      
    }

    public all(){return this.readJsonFile();}

    public findById(id:string|number){
        let items = this.readJsonFile();
        return items.find((item:any) =>item.id == id)
    }
}
