import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Teams } from '../../api/teams/teams.js'
import './teams-directory.html'
import { Profiles } from '../../api/profiles/profiles.js'
import './create-team.html'

Template.createTeam.onCreated(function teamOnCreated() {
  //if I change to arrow there is no longer a this.
  this.autorun(() => {
    this.state = new ReactiveDict()
    this.subscribe('userTeam')
  })
})

Template.createTeam.events({
  'submit .create-team'(event) {
    event.preventDefault()
    const name = event.target.name.value
    const description = event.target.description.value
    const adminId = this.userId
    const owner = this.name
    const members = {
      name: this.name,
      userId: this.userId
    }

    Meteor.call('teams.createTeam', {
      adminId,
      owner,
      name,
      description,
      members
    })
  },
  'submit .edit-team'(event) {
    event.preventDefault()

    const name = event.target.name.value || this.name
    const description = event.target.description.value || this.description
    const adminId = this.adminId
    Meteor.call('teams.editTeam', {
      adminId,
      name,
      description
    })
  },
  'click .edit-team-btn'(event, instance) {
    instance.state.set('isEditing', !instance.state.get('isEditing'))
  }
})

Template.createTeam.helpers({
  teamsCollection() {
    return Teams
  },
  notInTeam() {
    if (!this.inTeam) {
      return true
    }
  },
  userTeam() {
    return Teams.find({})
  },
  isEditing() {
    const instance = Template.instance()
    if (instance.state.get('isEditing')) {
      return true
    }
  }
})
