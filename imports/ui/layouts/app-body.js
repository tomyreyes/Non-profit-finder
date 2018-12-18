import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import './app-body.html'
import '../sign-in.js'
import '../pages/home.js'
import '../pages/profile.js'
import '../partials/navigation.js'

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict()
})
