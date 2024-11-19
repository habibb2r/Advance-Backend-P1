import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

export type UserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type LocalQuardian ={
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}

export type Student = {
    id : string;
    name: UserVerificationRequirement;
    gender: "Male" | "Female";
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    emergencyContact: string;
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalQuardian;
    profileImg? : string;
    isActive: 'active' | 'blocked';

}

