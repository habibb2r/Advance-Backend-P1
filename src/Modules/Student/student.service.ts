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
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([
    {$match: { id: id}}
  ])
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};
export const StudentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudent,
  deleteStudentFromDB
};
