import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(student); // Built in static method

  const student = new StudentModel(studentData) //built in instance method
  const result = await student.save()
  return result;
};

const getStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudent,
};
