import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

export type Student = {
    id : string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    gender: "Male" | "Female";
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContact: string;
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;

}

