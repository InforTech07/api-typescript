import { Serve } from "./serve";
import {config} from "./default";

/**
 * init application
 * @param n name app
 * @param p port app
 */
function main(h: string,p:string |number,n:string ){
    const srv = new Serve(h,p,n);
    srv.initServer();
}

main(config.api.host,config.api.port,config.api.nameApp)
