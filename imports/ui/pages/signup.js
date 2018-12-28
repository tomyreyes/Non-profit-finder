import { Template } from 'meteor/templating'
import './signup.html'

Template['overwrite-atTextInput'].replaces('atTextInput')
Template['overwrite-atPwdFormBtn'].replaces('atPwdFormBtn')
Template['overwrite-atSigninLink'].replaces('atSigninLink')
