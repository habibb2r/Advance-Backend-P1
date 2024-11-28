import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); // Built in static method

  const student = new Student(studentData) //built in instance method

  if(await student.isUserExists(studentData.id)){
    throw new Error('User already exists');
  }
  const result = await student.save()
  return result;
};

const getStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudent,
};
