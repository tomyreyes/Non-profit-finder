import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../../ui/layouts/app-body.js'
import '../../ui/layouts/profiles-layout.js'
import '../../ui/pages/profile.js'
import '../../ui/pages/profiles-directory.js'

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('appbody', { main: 'home' })
  }
})

FlowRouter.route('/login', {
  login: 'login',
  action() {
    BlazeLayout.render('appbody', { main: 'login' })
  }
})

FlowRouter.route('/profiles', {
  name: 'Profiles',
  action() {
    BlazeLayout.render('profilesLayout', { page: 'profilesDirectory' })
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
    BlazeLayout.render('profilesLayout', { page: 'profile' })
  },
  triggersEnter: [
    (context, redirect) => {
      if (!Meteor.userId()) {
        FlowRouter.go('/login')
      }
    }
  ]
})

FlowRouter.route('/teams', {
  name: 'Teams',
  action() {
    BlazeLayout.render('profilesLayout', { page: 'teamsDirectory' })
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
  name: 'NotFound',
  action() {
    BlazeLayout.render('appbody', { main: 'not-found' })
  }
}
