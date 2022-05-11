const express = require('express');
const app = express();
require('./db/conn.js');
const Student = require('./models/students');
const studentRouter = require('./router/studentRouter');
app.use(express.json());
const port = process.env.PORT || 8000;
app.use(studentRouter);

app.listen(port, () => {
  console.log(`Web is listening on port ${port}`)
})

// post method using async and await
// app.post('/students', async(req, res)=>{
//   try {
//     const user = new Student(req.body);
//   const createUser = await user.save();
//   res.status(201).send(createUser);
//   } catch (error) {
//     res.status(400).send(error);
//   }
  
// })





// post method using promis return
// app.post("/students", (req, res) => {
  
//   const user = new Student(req.body);
//   user.save().then(()=>{
//       res.status(201).send(user);
//   }).catch((e)=>{
//       res.status(400).send(e);
//   })
//   console.log(user);
// })

// app.get('/students', async(req, res)=>{

//   try {
//     const studentsData = await Student.find();
//   res.status(200).send(studentsData);
//   } catch (error) {
//     res.status(400).send(error);
//   }
  
// })

// get data by id
// app.get("/students/:id", async(req, res)=>{

//   try {
//     const _id = req.params.id; 
//     const studentData = await Student.findById({_id:_id});
    
//   res.status(200).send(studentData);
//   } catch (error) {
//     res.status(400).send(error);
//   }
  
// })
// get data by id new or name
// app.get("/students/:name", async(req, res)=>{

//   try {
//     const _name = req.params.name; 
//     const studentData = await Student.find({name: _name});
//     console.log(_name);
//   res.status(200).send(studentData);
//   } catch (error) {
//     res.status(400).send(error);
//   }
  
// })
// get data by name ADURA HAI NOT WOERKING
// app.get("/students/:name", async(req, res)=>{

//   try {
//     const _name = req.params.name; 
//     const studentData = await Student.find({name: "mukesh kumar"});
//     console.log(_name);
//   res.status(200).send(studentData);
//   } catch (error) {
//     res.status(400).send(error);
//   }
  
// })

// update data
// app.patch("/students/:id", async(req, res)=>{

//   try {
//     const _id = req.params.id; 
//     const studentData = await Student.findByIdAndUpdate({_id:_id},req.body, {new: true});
    
//   res.status(200).send(studentData);
//   } catch (error) {
//     res.status(400).send(error);
//   }
  
// })
// // update data
// app.delete("/students/:id", async(req, res)=>{

//   try {
//     const _id = req.params.id; 
//     const studentData = await Student.findByIdAndDelete({_id:_id});
    
//   res.status(200).send(studentData);
//   } catch (error) {
//     res.status(400).send(error);
//   }
  
// })

