import express from 'express'
import cors from 'cors'
import usersRouter from './routers/users.router.js'
const server = express() // Crear el server

// Middlewares
server.use(express.json())
server.use(cors())

// Routers
server.use('/users', usersRouter)

// server export
export { server }
