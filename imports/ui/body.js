import { Template } from 'meteor/templating'
import { Tasks } from '../api/tasks.js'
import { ReactiveDict } from 'meteor/reactive-dict'
import './body.html'
import './sign-in.js'

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict()
})
