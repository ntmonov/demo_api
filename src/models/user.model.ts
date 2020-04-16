import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(4)
  password: string;
}

export class RegistrationDTO extends LoginDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;
}

export interface AuthPayload {
  username: string;
}
