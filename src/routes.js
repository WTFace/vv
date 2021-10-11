import { Main } from './pages/main';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Intro } from './pages/intro';
import { Location } from './pages/location';

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
    },
    {
      path: "/location",
      component: Location,
      exact: true
    }
];