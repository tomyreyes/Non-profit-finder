import { Meteor } from 'meteor/meteor'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../../ui/layouts/app-body.js'

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('app-body', { main: 'home' })
  }
})

FlowRouter.route('/login', {
  login: 'Login',
  action() {
    BlazeLayout.render('app-body', { main: 'login' })
  }
})

const userRoutes = FlowRouter.group({
  prefix: '/users',
  triggersEnter: [
    (context, redirect) => {
      if (!Meteor.userId()) {
        redirect('/admin/login')
      }
    }
  ]
})

// this will be /users/profile/:_id
userRoutes.route('/profile/:_id', {
  name: 'User Profile',
  //   triggersEnter: [()=> {
  //       Meteor.userId()
  //   }],
  action() {
    BlazeLayout.render('app-body', { main: 'profile' })
  }
})

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('app-body', { main: 'not-found' })
  }
}

Accounts.onLogin(() => {
  FlowRouter.go('/profile/:_id')
})
