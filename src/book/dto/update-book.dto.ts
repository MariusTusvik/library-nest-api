import {
  IsEmpty,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly title: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly description: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly author: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Please enter correct category.' })
  @ApiProperty()
  readonly category: Category;

  @IsEmpty({ message: 'You cannot pass user id' })
  @ApiProperty()
  readonly user: User;
}
