import { Meteor } from 'meteor/meteor'
const sendToLogin = () => {
  FlowRouter.go('/login')
}

const sendToProfile = () => {
  FlowRouter.go(`/profile/${Meteor.userId()}`)
}

AccountsTemplates.configure({
  onLogoutHook: sendToLogin,
  onSubmitHook: sendToProfile
})
