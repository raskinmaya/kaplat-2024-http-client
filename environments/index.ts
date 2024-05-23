import { configDotenv } from "dotenv";

configDotenv();

export const SERVER_HOST = process.env.SERVER_HOST as string;
export const SERVER_PORT = parseInt(process.env.SERVER_PORT);
export const STUDENT_ID = parseInt(process.env.STUDENT_ID);
export const STUDENT_BIRTH_YEAR = parseInt(process.env.STUDENT_BIRTH_YEAR);