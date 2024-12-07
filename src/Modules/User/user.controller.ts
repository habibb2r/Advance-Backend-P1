import httpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../Utils/sendResponse';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodValidationData = studentValidationSchema.parse(studentData)
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student created successfully',
      data: result,

    })

  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
