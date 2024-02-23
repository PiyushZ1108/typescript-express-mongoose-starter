import { RCSController } from '@/controllers/rcs.controller';
import { Routes } from '@/interfaces/routes.interface';
// import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { Router } from 'express';

export class RCSRoutes implements Routes {
  public path = '/RCS';
  public router = Router();
  public rcsController = new RCSController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/add-bot`, this.rcsController.addBotNewController);
    this.router.get(`${this.path}/get-bots-list`, this.rcsController.getAllBotsListController);

   
  }
};
