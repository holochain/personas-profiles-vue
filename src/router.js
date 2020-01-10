import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/persona',
    //   name: 'persona',
    //   component: () => import(/* webpackChunkName: "persona" */ './views/Persona.vue')
    // },
    {
      path: '/personas',
      name: 'personas',
      component: () => import(/* webpackChunkName: "personas" */ './views/Personas.vue')
    },
    {
      path: '/cat-profile',
      name: 'cat-profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/CatProfile.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: () => import(/* webpackChunkName: "profiles" */ './views/Profiles.vue')
    },
    {
      path: '/profile-specs',
      name: 'profile-specs',
      component: () => import(/* webpackChunkName: "profile spec" */ './views/ProfileSpecs.vue')
    },
    {
      path: '/image-manager',
      name: 'image-manager',
      component: () => import(/* webpackChunkName: "image-manager" */ './views/ImageManager.vue')
    },
    {
      path: '/video-manager',
      name: 'video-manager',
      component: () => import(/* webpackChunkName: "video-manager" */ './views/VideoManager.vue')
    },
    {
      path: '/music-manager',
      name: 'music-manager',
      component: () => import(/* webpackChunkName: "music-manager" */ './views/MusicManager.vue')
    },
    {
      path: '/track-card',
      name: 'track-card',
      component: () => import(/* webpackChunkName: "track-card" */ './views/TrackCard.vue')
    }
  ]
})
