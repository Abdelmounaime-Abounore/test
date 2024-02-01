import {
    Controller,
    Body,
    Res,
    Get,
    Post,
    Query,
    ValidationPipe
  } from '@nestjs/common';
  import { StudentService } from './student.service'; 
  import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}
    @Get()
    async findAll(
      @Query('page') page: number = 1,
      @Query('limit') limit: number = 10,
      @Query('search') search: string,
    ) {
      const students = await this.studentService.findAll(page, limit, search);
      return students;
    }


    @Post()
    async create(@Res() res, @Body(ValidationPipe) createStudentDto: CreateStudentDto) {
      const newStudent = await this.studentService.create(createStudentDto);
      return res.json({
        message: 'Student has been added successfully!',
        student: newStudent,
      });
    }
}


  