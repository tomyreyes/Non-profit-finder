import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../../ui/layouts/app-body.js'

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' })
  }
})

FlowRouter.route('/login', {
  login: 'Login',
  action() {
    BlazeLayout.render('App_body', { main: 'signIn' })
  }
})

FlowRouter.route('/profile/:_id', {
  name: 'User Profile',
  action() {
    BlazeLayout.render('App_Body', { main: 'profile' })
  }
})
