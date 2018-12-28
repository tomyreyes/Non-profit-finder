import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../../ui/layouts/app-body.js'
import '../../ui/pages/profile.js'
import '../../ui/pages/profiles-directory.js'

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('appBody', { page: 'home' })
  }
})

FlowRouter.route('/login', {
  login: 'login',
  action() {
    BlazeLayout.render('appBody', { page: 'login' })
  }
})

FlowRouter.route('/signup', {
  login: 'signup',
  action() {
    BlazeLayout.render('appBody', { page: 'signup' })
  }
})

FlowRouter.route('/profiles', {
  name: 'Profiles',
  action() {
    BlazeLayout.render('appBody', { page: 'profilesDirectory' })
  },
  triggersEnter: [
    (context, redirect) => {
      if (!Meteor.userId()) {
        FlowRouter.go('/login')
      }
    }
  ]
})

FlowRouter.route('/profiles/:id', {
  name: 'UserProfile',
  action() {
    BlazeLayout.render('appBody', { page: 'profile' })
  },
  triggersEnter: [
    (context, redirect) => {
      if (!Meteor.userId()) {
        FlowRouter.go('/login')
      }
    }
  ]
})

FlowRouter.route('/directory', {
  name: 'Directory',
  action() {
    BlazeLayout.render('appBody', { page: 'directory' })
  },
  triggersEnter: [
    (context, redirect) => {
      if (!Meteor.userId()) {
        FlowRouter.go('/login')
      }
    }
  ]
})

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('appBody', { page: 'not-found' })
  }
}
