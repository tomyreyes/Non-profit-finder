import { Template } from 'meteor/templating'
import './login.html'

Template['override-atTextInput'].replaces('atTextInput')
Template['override-atPwdFormBtn'].replaces('atPwdFormBtn')
