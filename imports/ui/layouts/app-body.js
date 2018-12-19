import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import './app-body.html'
import '../pages/login.js'
import '../pages/home.js'
import '../pages/profile.js'
import '../partials/navigation.js'
import '../pages/not-found.js'

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict()
  Meteor.subscribe('profiles')
})
