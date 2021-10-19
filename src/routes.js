import { Main } from './pages/main';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Intro } from './pages/intro';
import { Location } from './pages/location';
import { TermsOfUse } from './pages/terms';
import { Ask } from './pages/ask';

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
    },
    {
      path: "/terms-of-use",
      component: TermsOfUse
    },
    {
      path: "/ask",
      component: Ask
    },
];