import { configDotenv } from "dotenv";

configDotenv();

export const SERVER_HOST = process.env.SERVER_HOST as string;
export const SERVER_PORT = parseInt(process.env.SERVER_PORT);