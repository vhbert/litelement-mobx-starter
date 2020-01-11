import {Router} from 'slick-router';
import {wc} from 'slick-router/middlewares/wc';
import {routerLinks, withRouterLinks} from 'slick-router/middlewares/router-links';
import HomeView from "../views/Home";
import {events} from "slick-router/middlewares/events";
import AboutView from "../views/About";

export function createRouter(outlet) {

  const routes = [
    {
      path: '/',
      name: 'home',
      component: 'home-view'
    },

    {
      path: '/about/:entry?',
      name: 'about',
      component: () => import("../views/About"),
    }

  ];
  const router = new Router({routes, outlet: outlet, log: false});
  router.use(wc);
  router.use(routerLinks);
  return router;
}


export {withRouterLinks};
