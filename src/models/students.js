const mongoose = require('mongoose');
const validator = require("validator");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3
        },
        
        email: {
            type: String,
            required: true,
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalid Email');
                }
            }
        },
        phone:{ 
            type: String,
            unique: true,
            minlength: 10,
            max: 10,
            required: true,
            validate(value) {
                if (!validator.isMobilePhone(value)) {
                    throw new Error('Invalid phone number');
                }
            }
        },
        address: {
            type: String, 
            required: true
        }
}

)

// new collection \

const Student = new mongoose.model('student',studentSchema )

module.exports= Student;