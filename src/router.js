/**
 * Created by tww316 on 16/7/22.
 */
'use strict';

import vue from 'vue';
import router from 'vue-router';
import app from './views/app';
import index from './views/index';
import login from './views/login';
import register from './views/register';
import demand from './views/demand';
import provider from './views/provider';

vue.use(router);

const router = new router();

router.map({
  '/': {
    name: 'home',
    component: index
  },
  '*': {
    component: index
  },
  '/login': {
    name: 'login',
    component: login
  },
  '/register': {
    name: 'register',
    component: register
  },
  '/demand': {
    name: 'demand',
    component: demand
  },
  '/provider': {
    name: 'provider',
    component: provider
  }
});

router.redirect({
  '*': '/login'
});

router.start(app, '#app');
