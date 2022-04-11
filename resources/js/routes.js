import Vue from 'vue'
import VueRouter from 'vue-router'

// Diciamo a vue di usare Vue Router
Vue.use(VueRouter)

//importiamo i componenti pagine
import HomePage from './components/pages/HomePage.vue';
import ContactPage from './components/pages/ContactPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';
import PostDetailPage from './components/pages/PostDetailPage.vue';

// Inizializziamo il router
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/contacts', component: ContactPage, name: 'contacts' },
        { path: '/posts/:id', component: PostDetailPage, name: 'post-detail' },
        { path: '*', component: NotFoundPage, name: 'not-found' },
    ]
});

export default router;