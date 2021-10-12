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
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/intro",
      component: Intro
    },
    {
      path: "/location",
      component: Location
    }
];