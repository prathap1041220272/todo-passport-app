'use strict';

const mongoose = require('mongoose');
const uri = 'mongodb://localhost/todo';
const useMongoClient = true;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {useMongoClient}, (err)=> {
	if (err) 
		console.log('Database not connected');

     else
		console.log('Database  connected')
  
})


module.exports = mongoose