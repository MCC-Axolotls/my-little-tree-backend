const express = require('express')
const plants = require('../useCases/plants')
const router = express.Router()
const verifyAuth = require('../middlewares/auth')

// Create Plant
router.post('/', verifyAuth, async (request, response) => {
  try {
    const data = request.body
    const documentCreated = await plants.create({ data })
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
      message: 'Ups! Algo salio mal, intenta de nuevo',
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
        message: 'Ups! Algo salio mal, intenta de nuevo',
        error: error.message
        })
    }
})
// Get All Plants By Params
router.get('/search', async (request, response) => {
    try {
        const { activeTrial, record, id, title, assignee} = request.query;
        let options = {}
        if(activeTrial) options = {...options,activeTrial}
        if(record !== undefined) options = {...options, record }
        if(id) options = {...options,_id:id}
        if(title) options = {...options,title}
        if(assignee) options = {...options,assignee}

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
        message: 'Ups! Algo salio mal, intenta de nuevo',
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
        message: 'Ups! Algo salio mal, intenta de nuevo',
        error: error.message
        })
    }
})
// Update Taks by Id
router.patch('/:id', verifyAuth, async (request, response) => {
  try {
    const { id } = request.params
    const { body: newdata } = request
    const plantUpdated = await plants.updateById({id, newdata})
    response.json({
      success: true,
      message: 'Tus datos han sido actualizado correctamente',
      data: {
        plant: plantUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      sucess: false,
      message: 'Ups! Algo salio mal, intenta de nuevo',
      error: error.message
    })
  }
})
// Delete Plant by Id
router.delete('/:id', verifyAuth, async (request, response) => {
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
      message: 'Ups! Algo salio mal, intenta de nuevo',
      error: error.message
    })
  }
})

module.exports = router