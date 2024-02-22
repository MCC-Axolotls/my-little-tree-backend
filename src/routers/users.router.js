import express from 'express'


const router = express.Router()



router.get('/', async (request, response) => {

    try {

        response.json({
            success: true,
            data: {
                message: "Hello World"
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get All Koders"
            })
    }

})

export default router