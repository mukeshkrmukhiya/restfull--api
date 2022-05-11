// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/students-api');
  console.log(" 😀😁Database connection successful😁😀 ");
}