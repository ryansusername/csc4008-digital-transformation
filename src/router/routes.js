
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ],
    meta: {
      title: 'Home Dashboard'
    }
  },
  {
    path: '/HVACandLighting',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HVACandLighting.vue') }
    ]
  },
  {
    path: '/SafetyandSecurity',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SafetyandSecurity.vue') }
    ]
  },
  {
    path: '/SpaceAllocation',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SpaceAllocation.vue') }
    ]
  },
  {
    path: '/EnergyUsage',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EnergyUsage.vue') }
    ]
  },
  {
    path: '/Amenities',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Amenities.vue') }
    ]
  },
  {
    path: '/AccountManagement',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AccountManagement.vue') }
    ]
  },
  {
    path: '/Login',
    component: () => import('pages/Login.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
