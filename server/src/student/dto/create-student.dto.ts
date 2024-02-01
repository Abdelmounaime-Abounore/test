import { IsNotEmpty, IsEmail, IsDate } from 'class-validator';
import { Type } from 'class-transformer'


export class CreateStudentDto {
    @IsNotEmpty({ message: 'First name is required' })
    firstName: string;

    @IsNotEmpty({ message: 'Last name is required' })
    lastName: string;

    @Type(() => Date)
    @IsDate()
    dateOfBirth: Date;

    @IsEmail({}, { message: 'Invalid email address' })
    email: string;
}
