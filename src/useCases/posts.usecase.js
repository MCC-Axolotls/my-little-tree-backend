const Posts = require("../models/posts.model")

async function create({ post }){
    return await Posts.create(post)
}
async function getAll(){
    return await Posts.find()
}
async function getAllByParams({options}){
    return await Posts.find({...options})
}
async function getById({id}){
    return await Posts.findById(id)
}
async function updateById({id,newData,populateData}){
    if(populateData)
        return  await Posts.findByIdAndUpdate(id, newData, { new: true })
    return await Posts.findByIdAndUpdate(id, newData, { new: true })
}
async function deleteById({id}){
    return await Posts.findByIdAndDelete(id)
}

module.exports = {
    create,
    getAll,
    getAllByParams,
    getById,
    updateById,
    deleteById
}