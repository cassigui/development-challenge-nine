import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUser1714444496671 } from "./migrations/1714444496671-createUser"
import User from "../app/entities/User"

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "147852369c",
    "database": "crud",
    "synchronize": true,
    "logging": false,
    "entities": [User],
    "migrations": [CreateUser1714444496671],
    "subscribers": [],
})

