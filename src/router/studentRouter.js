const express = require('express');
const router =   new express.Router();
module.exports = router;
const Students = require('../models/students');

router.get("/mukesh", (req, res)=>{
  res.send("this is happyness");
})

router.post("/students", (req, res) => {
  
    const user = new Students(req.body);
    user.save().then(()=>{
      
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
    console.log(user);
  })
  
  router.get('/students', async(req, res)=>{
  
    try {
      const studentsData = await Students.find();
    res.status(200).send(studentsData);
    } catch (error) {
      res.status(400).send(error);
    }
    
  })
  

router.get("/students/:id", async(req, res)=>{

    try {
      const _id = req.params.id; 
      const studentData = await Students.findById({_id:_id});
      
    res.status(200).send(studentData);
    } catch (error) {
      res.status(400).send(error);
    }
    
  })
// get data by id new or name
router.get("/studentsname/:name", async(req, res)=>{

  try {
    const _name = req.params.name; 
    const studentData = await Students.find({name: _name});
    console.log(_name);
  res.status(200).send(studentData);
  } catch (error) {
    res.status(400).send(error);
  }
  
})

router.patch("/students/:id", async(req, res)=>{

    try {
      const _id = req.params.id; 
      const studentData = await Students.findByIdAndUpdate({_id:_id},req.body, {new: true});
      
    res.status(200).send(studentData);
    } catch (error) {
      res.status(400).send(error);
    }
    
  })
  // update data
  router.delete("/students/:id", async(req, res)=>{
  
    try {
      const _id = req.params.id; 
      const studentData = await Students.findByIdAndDelete({_id:_id});
      
    res.status(200).send(studentData);
    } catch (error) {
      res.status(400).send(error);
    }
    
  })