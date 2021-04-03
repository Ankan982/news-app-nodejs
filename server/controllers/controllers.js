const express = require('express')
const axios = require('axios')
// View news
exports.view = async(req, res) => {
   // res.render('home');
   try {
    const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=290e2b9e3c034ee3b48e8608d59cd499`)
    res.render('home', { articles : newsAPI.data.articles })
   // console.log(newsAPI.data);
} catch (err) {
    if(err.response) {
        res.render('home', { articles : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    } else if(err.requiest) {
        res.render('home', { articles : null })
        console.log(err.requiest)
    } else {
        res.render('home', { articles : null })
        console.error('Error', err.message)
    }
} 
  }
  
  exports.technologyview = async(req, res) => {
    // res.render('home');
    try {
     const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=290e2b9e3c034ee3b48e8608d59cd499`)
     res.render('home', { articles : newsAPI.data.articles })
    // console.log(newsAPI.data);
 } catch (err) {
     if(err.response) {
         res.render('home', { articles : null })
         console.log(err.response.data)
         console.log(err.response.status)
         console.log(err.response.headers)
     } else if(err.requiest) {
         res.render('home', { articles : null })
         console.log(err.requiest)
     } else {
         res.render('home', { articles : null })
         console.error('Error', err.message)
     }
 } 
   }

     
  exports.bitcoinview = async(req, res) => {
    // res.render('home');
    try {
     const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=bicoin&apiKey=290e2b9e3c034ee3b48e8608d59cd499`)
     res.render('home', { articles : newsAPI.data.articles })
    // console.log(newsAPI.data);
 } catch (err) {
     if(err.response) {
         res.render('home', { articles : null })
         console.log(err.response.data)
         console.log(err.response.status)
         console.log(err.response.headers)
     } else if(err.requiest) {
         res.render('home', { articles : null })
         console.log(err.requiest)
     } else {
         res.render('home', { articles : null })
         console.error('Error', err.message)
     }
 } 
   }

     
  exports.economyview = async(req, res) => {
    // res.render('home');
    try {
     const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=economy&apiKey=290e2b9e3c034ee3b48e8608d59cd499`)
     res.render('home', { articles : newsAPI.data.articles })
    // console.log(newsAPI.data);
 } catch (err) {
     if(err.response) {
         res.render('home', { articles : null })
         console.log(err.response.data)
         console.log(err.response.status)
         console.log(err.response.headers)
     } else if(err.requiest) {
         res.render('home', { articles : null })
         console.log(err.requiest)
     } else {
         res.render('home', { articles : null })
         console.error('Error', err.message)
     }
 } 
   }