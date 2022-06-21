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

const getCreateBookCollection = (req, res) => {
  res.render('BookCollections/createCollection')
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

module.exports = {
  getAllBookCollections,
  getBookCollection,
  getCreateBookCollection,
  createBookCollection,
}