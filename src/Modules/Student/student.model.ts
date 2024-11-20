import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';
import validator from 'validator';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'First name must be less than 20 characters'],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in Capitalized',
    },
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: [20, 'Middle name must be less than 20 characters'],
    
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [20, 'Last name must be less than 20 characters'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
    trim: true,
    maxlength: [20, "Father's name must be less than 20 characters"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
    trim: true,
    maxlength: [20, 'Occupation must be less than 20 characters'],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
    trim: true,
    length: [11, "Father's contact number must be 11 digits"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
    trim: true,
    maxlength: [20, "Mother's name must be less than 20 characters"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
    trim: true,
    maxlength: [20, 'Occupation must be less than 20 characters'],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
    trim: true,
    length: [11, "Mother'scontact number must be 11 digits"],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required"],
    trim: true,
    maxlength: [20, 'Name must be less than 20 characters'],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
    trim: true,
    maxlength: [20, 'Occupation must be less than 20 characters'],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
    trim: true,
    length: [11, 'Contact number must be 11 digits'],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
    trim: true,
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: { type: userNameSchema, required: [true, 'Name is required'] },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female'],
      message: '{VALUE} is not a valid gender.',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, 'Email is required'], unique: true, validate: {
    validator: (value: string) => validator.isEmail(value),
    message: '{VALUE} is not a valid email.',
  } },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true,
    length: [11, 'Contact number must be 11 digits'],
  },
  emergencyContact: {
    type: String,
    required: [true, 'Emergency contact is required'],
    trim: true,
    length: [11, 'Emergency Contact number must be 11 digits'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
