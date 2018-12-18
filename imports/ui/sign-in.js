import { Template } from 'meteor/templating'
import './sign-in.html'

Template['override-atTextInput'].replaces('atTextInput')
Template['override-atPwdFormBtn'].replaces('atPwdFormBtn')
