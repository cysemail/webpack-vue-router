import VueRouter from 'vue-router';
import account from './componets/account.vue'
import goodslist from './componets/goodslist.vue'
import login from './componets/login.vue'
import register from './componets/register.vue'

export default new VueRouter({
  routes: [
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register },
      ]
    },
    { path: '/goodslist', component: goodslist },
  ],
  linkActiveClass: 'currentClass'
});
