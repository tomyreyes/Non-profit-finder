import { Template } from 'meteor/templating'
import './navigation.html'

Template.navigation.events({
  'click .logout'() {
    AccountsTemplates.logout()
  }
})
