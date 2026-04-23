// import dotenv from "dotenv";
// dotenv.config();

if(!process.env.MONGO_URL) {
    throw new Error("DB connection string is missing in env");
}

export const MONGO_URL = process.env.MONGO_URL

if(!process.env.JWT_SECRET) {
    throw new Error("JWT secret is missing in env");
}
export const JWT_SECRET = process.env.JWT_SECRET