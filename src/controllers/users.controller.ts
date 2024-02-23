import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';

class UsersController {
  public userService = new userService();

  public logInController = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const {user_email , password} = req.body;


      const userDetails = await this.userService.logInService(user_email,password);
      if(userDetails){

        res.status(200).json({ status :"SUCCESS",data: userDetails });
      }else{
        res.status(400).json({ status :"Failed",message: "Incorrect Details" });

      }

    } catch (error) {
      next(error);
    }
  };

  
}

export default UsersController;
