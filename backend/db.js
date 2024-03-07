const express = require("express");
const Pool= require("pg").Pool;

const pool= new Pool({
    user:"postgres",
    password:"admin",
    host:"5432",
    database:"test",
    host:"localhost"
});

module.exports=pool;