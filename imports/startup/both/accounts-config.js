import { Meteor } from 'meteor/meteor'
const sendToLogin = () => {
  FlowRouter.go('/login')
}

const sendToProfile = () => {
  FlowRouter.go(`/profiles/${Meteor.userId()}`)
}

AccountsTemplates.configure({
  onLogoutHook: sendToLogin,
  onSubmitHook: sendToProfile
})
