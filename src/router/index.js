
import Home from '@/components/Home'
import Users from '@/components/User/Users'
import CreateUser from '@/components/User/CreateUser'
import Profile from '@/components/User/Profile'
import Login from '@/components/User/Login'
import Client from '@/components/Client/Clients'
import Event from '@/components/Event/Events'
import Post from '@/components/Post/Posts'
import PostView from '@/components/Post/View'
import PostCreate from '@/components/Post/Create'
import PostEdit from '@/components/Post/Edit'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/new',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/clients',
    name: 'Client',
    component: Client
  },
  {
    path: '/events',
    name: 'Event',
    component: Event
  },
  {
    path: '/posts',
    name: 'Post',
    component: Post
  },
  {
    path: '/posts/new',
    name: 'PostCreate',
    component: PostCreate
  },
  {
    path: '/posts/:id',
    name: 'PostView',
    component: PostView
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEdit
  }
]

export default routes
