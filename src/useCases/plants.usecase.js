const Plants = require("../models/plants.model")

async function create({ post }){
    return await Plants.create(post)
}
async function getAll(){
    return await Plants.find()
}
async function getAllByParams({options}){
    return await Plants.find({...options})
}
async function getById({id}){
    return await Plants.findById(id)
}
async function updateById({id,newData,populateData}){
    if(populateData)
        return  await Plants.findByIdAndUpdate(id, newData, { new: true })
    return await Plants.findByIdAndUpdate(id, newData, { new: true })
}
async function deleteById({id}){
    return await Plants.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getAllByParams,
    getById,
    updateById,
    deleteById
}