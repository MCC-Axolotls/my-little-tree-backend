import express from 'express'
import plants from '../useCases/plants.usecase.js'
//import { isAuth } from '../middlewares/auth.middleware.js'
const router = express.Router()

// Create Plant

//http://locahost:8080/plants
router.post('/', async (request, response) => {
  try {
    const plant = request.body
    const documentCreated = await plants.create({ plant })
    response.json({
      success: true,
      message: 'The plant was inserted successfully',
      data: {
        plants: documentCreated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: 'Ups! Something when wrong, try again',
      error: error.message
    })
  }
})
// Get All Plants
router.get('/', async (request, response) => {
    try {
        const responseData = await plants.getAll()
        response.json({
        success: true,
        message: 'Plants Found',
            data: {
                plants: responseData
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
        success: false,
        message: 'Ups! Something when wrong, intenta de nuevo',
        error: error.message
        })
    }
})
// Get All Plants By Params
router.get('/search', async (request, response) => {
    try {
        const { nickname, plantType, id, userId} = request.query;
        let options = {}

        if(id) options = {...options,_id:id}
        if(nickname) options = {...options,nickname}
        if(plantType !== undefined) options = {...options, plantType }
        if(userId) options = {...options,userId}

        const responseData = await plants.getAllByParams({options})
        response.json({
        success: true,
        message: 'Plants Found',
            data: {
                plants: responseData
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
        success: false,
        message: 'Ups! Something when wrong, intenta de nuevo',
        error: error.message
        })
    }
})
// Get All Plants By Params
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const responseData = await plants.getById({id})
        response.json({
        success: true,
        message: 'Plants Found',
            data: {
                plants: responseData
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
        success: false,
        message: 'Ups! Something when wrong, intenta de nuevo',
        error: error.message
        })
    }
})
// Update Taks by Id
router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const { body: newData } = request
    const plantUpdated = await plants.updateById(id, newData)
    response.json({
      success: true,
      message: 'The data has been updated',
      data: {
        plant: plantUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      sucess: false,
      message: 'Ups! Something when wrong, intenta de nuevo',
      error: error.message
    })
  }
})
// Delete Plant by Id
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const responseData = await plants.deleteById({ id })
    response.json({
      success: true,
      message: 'Plant Deleted',
      data: {
        users: responseData
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      sucess: false,
      message: 'Ups! Something when wrong, intenta de nuevo',
      error: error.message
    })
  }
})

export default router