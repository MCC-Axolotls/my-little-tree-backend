import express from 'express'
import cors from 'cors'
// import usersRouter from './routers/users.router'
import postsRouter from './routers/posts.router.js'
import plantsRouter from './routers/plants.router.js'
const server = express() // Crear el server

// Middlewares
server.use(express.json())
server.use(cors())

// Routers
// server.use('/users', usersRouter)
server.use('/posts', postsRouter)
server.use('/plants', plantsRouter)

// server export
export { server }
