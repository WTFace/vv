import { Main } from './pages/main';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Intro } from './pages/intro';

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
    {
      path: "/intro",
      component: Intro,
      exact: true
    }
];