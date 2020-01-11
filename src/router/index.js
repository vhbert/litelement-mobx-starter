import {Router} from 'slick-router';
import {wc} from 'slick-router/middlewares/wc';
import {routerLinks, withRouterLinks} from 'slick-router/middlewares/router-links';
import HomeView from "../views/Home";


export function createRouter(outlet) {

  const routes = [
    {
      path: '/',
      name: 'home',
      component: 'home-view'
    },
    {
      path: '/about',
      name: 'about',
      component: () => {
        import(/* webpackChunkName: "about" */ '../views/About');
        return "about-view";
      }
    }

  ];
  const router = new Router({routes, outlet: 'router-slot', log: false});
  router.use(wc);
  router.use(routerLinks);
  return router;
}


export {withRouterLinks};
