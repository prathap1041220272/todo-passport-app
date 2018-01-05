'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
	email : { type : String , unique : [true, 'This Mail ID Already Exist'], required : true},
	password : { type : String,required :true}
});


module.exports = mongoose.model('user', userSchema)