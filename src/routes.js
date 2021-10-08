import { Main } from './pages/main';
import { Login } from './pages/login';
import { Register } from './pages/register';

export const routes = [
    {
      path: "/",
      component: Main,
      exact: true
    },
    {
      path: "/login",
      component: Login,
      exact: true
    },
    {
      path: "/register",
      component: Register,
      exact: true
    },
    // {
    //   path: "/support",
    //   component: Support
    // }
];