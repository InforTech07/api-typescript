import { Serve } from "./serve";

function main(n:string,p:string |number ){
    const srv = new Serve(n,p);
    srv.initServer();
}

main("infortech",3000)