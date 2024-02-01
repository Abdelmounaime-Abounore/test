import { Injectable } from '@nestjs/common';
import { Student, StudentDocument } from './entity/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name)
        private readonly studentModel: Model<StudentDocument>,
      ) {}

      async findAll(page: number, limit: number, search: string) {
        const skip = (page - 1) * limit;
        const query = search ? { $or: [{ firstName: { $regex: search, $options: 'i' } }, { lastName: { $regex: search, $options: 'i' } }, { email: { $regex: search, $options: 'i' } }] } : {};
        return await this.studentModel.find(query).skip(skip).limit(limit).exec();
      }
    
      async create(createStudentDto: CreateStudentDto): Promise<Student> {
        try {
            const createdStudent = new this.studentModel(createStudentDto);        
            const savedStudent = await createdStudent.save();
            return savedStudent;
          } catch (error) {
            console.error('Error creating student:', error);
            throw error;
          }
      }
}
