const sendToLogin = () => {
  FlowRouter.go('/login')
}

AccountsTemplates.configure({
  onLogoutHook: sendToLogin
})
