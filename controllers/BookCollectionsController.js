const express = require('express');
const BookCollection = require('../models/BookCollection')


const getAllBookCollections = async (req, res) =>{
  try {
    const collections = await BookCollection.find().sort({date: -1})
    res.render('BookCollections/index', {collections: collections})
  }
  catch (err){
    console.log(err)
  }
}

const getBookCollection = async (req, res) => {
  try {
    const collectionDetails = await BookCollection.findById(req.params.id)
    res.render('BookCollections/collection', {collectionDetails: collectionDetails})
  } 
  catch (error) {
    console.log(error)  
  }
}

const getCreateBookCollection = async (req, res) => {
  try {
    res.render('BookCollections/create')
    
  } catch (error) {
    console.log(error)
  }
}

const createBookCollection = async (req, res) => {
  try {
    const bookCollection = await new BookCollection(req.body)
    bookCollection.date = new Date()
    bookCollection.save()
    console.log(bookCollection)
    res.redirect('/collections')
    
  } catch (error) {
    console.log(error)
  }
}

const deleteBookCollection = async (req, res) => {
  try {
    // await BookCollection.deleteOne({_id: body.params.id})
    // redirect('/collections')
    console.log('deleted')
    redirect('/collections')
  } catch (error) {
    console.log(error)
  }
}

const searchCollection = async (req, res) =>{
  try {
    const collections = await BookCollection.find({name: {$regex: req.body.search, $options: 'i'}})
    res.render('BookCollections/index', {collections: collections})
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllBookCollections,
  getBookCollection,
  getCreateBookCollection,
  createBookCollection,
  deleteBookCollection,
  searchCollection
}