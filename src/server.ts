import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import { RCSRoutes } from './routes/rcs.router';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(),new RCSRoutes()]);

app.listen();
