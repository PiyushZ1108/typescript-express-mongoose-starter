import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class UserService {
  public users = userModel;

  public async logInService(user_email,password): Promise<any> {

   const userDetails = {user_email,password};

    return userDetails;
  }

  
}

export default UserService;
