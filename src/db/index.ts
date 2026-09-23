import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/singlestore";

if(!process.env.DATABASE_URL){
    throw new Error("DATABASE_URL isn't defined")
}

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql);