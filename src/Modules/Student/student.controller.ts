import httpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../Utils/sendResponse';


const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getStudentsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students retrived successfully',
      data: result,

    })
  } catch (err) {
   next(err)
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudent(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Retrieved successfully',
      data: result,

    })
  } catch (err) {
    next(err)
  }
};
const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student deleted successfully',
      data: result,

    })
  } catch (err) {
   next(err)
  }
};

export const StudentControllers = {
  getStudents,
  getSingleStudent,
  deleteStudent,
};
