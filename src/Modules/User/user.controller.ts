import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodValidationData = studentValidationSchema.parse(studentData)
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    res.status(202).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
