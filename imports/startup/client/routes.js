import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../../ui/layouts/app-body.js'
import '../../ui/pages/home.js'

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' })
  }
})
