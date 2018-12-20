import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../../ui/layouts/app-body.js'
import '../../ui/pages/profile.js'

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('appbody', { main: 'home' })
  }
})

FlowRouter.route('/login', {
  login: 'Login',
  action() {
    BlazeLayout.render('appbody', { main: 'login' })
  }
})

FlowRouter.route('/profile/:id', {
  name: 'UserProfile',
  action() {
    BlazeLayout.render('appbody', { main: 'profile' })
  }
})

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('appbody', { main: 'not-found' })
  }
}
