import dotenv from 'dotenv';

const env = dotenv.config();

export const config={
    api:{
        port:process.env.PORT ||3000,
        nameApp:process.env.NAMEAPP || "api",
        host:process.env.HOST || "localhost",
    }
}