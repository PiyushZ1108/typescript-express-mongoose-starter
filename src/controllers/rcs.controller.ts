import { RequestWithUser } from '@/interfaces/auth.interface';
import { RCSService } from '@/services/rcs.service';
import axios from 'axios';
import { NextFunction, Response } from 'express';
import request from 'request';

export class RCSController {
  public rscService = new RCSService();

  public addBotNewController = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const orgId: string = String(req.headers.orgid);

      //   req.pipe(request.post('http://localhost:9005/pipe-route'));

      const axiosRequest = await axios({
        url: 'http://localhost:9005/pipe-route',
        method: 'POST',
        responseType: 'stream',
        data: req,
      });

      axiosRequest.data.pipe(res);

      const { data } = await axios.post('http://localhost:9005/pipe-route', req, {
        responseType: 'stream',
      });

      req.pipe(request.post('http://localhost:9005/pipe-route')).pipe(res);

      const formDataToSend = req.body;

      const createdBotDetails = await this.rscService.addNewBotService(formDataToSend, orgId);

      if (createdBotDetails) {
        res.status(200).json({ status: 'SUCCESS' });
      } else {
        res.status(400).json({ status: 'FAILED' });
      }
    } catch (error) {
      next(error);
    }
  };

  public getAllBotsListController = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const orgId: string = String(req.headers.orgid);

      const authorizationBearerToken = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization') : null);

      const allBotsList = await this.rscService.getAllBotsListService(orgId, authorizationBearerToken);

      if (allBotsList) {
        res.status(200).json({ status: 'SUCCESS', data: allBotsList });
      } else {
        res.status(400).json({ status: 'FAILED' });
      }
    } catch (error) {
      next(error);
    }
  };
}
