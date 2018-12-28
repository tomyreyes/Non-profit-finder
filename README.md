# Non-Profit Finder

This is a full stack application built with Meteor and Blaze. Prior to this project I had never used Meteor or Blaze so it was a great learning experience.
The application I created is essentially a platform where Non-Profit organizations can gain exposure and find individuals interested in joining a Non-Profit.

## Getting Started

### Step 1

```
git clone https://github.com/tomyreyes/Non-profit-finder.git
```

### Step 2

cd into Non-profit-finder and run:

```
meteor --settings settings.json
```

### You may receive a prompt to meteor npm install --save simpl-schema. If so, run the command.

### Step 3

Go to localhost:3000 on your browser.

## General Flow of the App

The first page users are greeted with is the home page. There is a small section describing the purpose of the website.
They also have the option to click on a navigation link to the sign-in / sign-up page.

Only logged in users of the website will have access to the profile and directory page. If users try to access these pages without being logged in they will be re-directed to the log in page.

Once a user is logged in they are re-directed to their own profile page where they are able to view and edit their own information.

As well, a new navigation link to a Directory page is made available to them.

In the Directory page, the user may be able to see three different components.

If the user is the admin of a team, which is the individual that creates a team, they will see their teams information as well as have the ability to edit the team.

If a user does not belong to a team, they have the option to create their own team.

Along with this,the user should be able to see a list of existing teams as well as a list of users, so long as there are users and teams existing.
If the user is the admin of a team, the option of adding users to their team will be available unless the user of interest already belongs to a team.

## Data Structure

There are three collections within this application.

1 - Users - this comes built in with Meteor's user-accounts package. This contains the Oauth data, along with the name, email and other associated data based on whether or not an Oauth service was used.

2 - Profiles Collection - this is a collection that is created upon user sign-up to the application. This contains, the name, email, team, bio and userId of the user. The userId is the same \_id generated in the Users collection. This was done for the purpose of creating a relationship between Users and Profiles. Although the Users and Profiles collections have similar information I separate them because I did not want to give users direct access to their User collection until I had more security measures in place.

3 - Team Collection - this collection is created when as user creates a team. This contains the team name, description, adminId and members. The adminId is generated from the \_id of the User creating the team. The members field is an array that contains objects which represent each member in the team. The objects contain member names and their userId's as well.

I used Meteor's publish and subscribe for communication between the Client and Server.

## Challenges

It is definitely always a challenge learning an entirely new framework. This challenge fell during the holiday season so I only had about 6 days I was available to work on it. Luckily some aspects this project are similar to technologies that I have worked with in the past such as EJS, Laravel and Blade. Additionally, Meteor has been a technology I have always been interested in.

My approach to learning included a variety of different resources. I used the documentation on Meteor
s website, the Meteor forums, Youtube tutorials and following the tutorials on Meteor's website.

I ran into some challenges while implementing packages for my project. In the research phase of this project I spent some time looking for recommended meteor packages I could use to streamline this project. Most of the packages worked great, however I found some to be tricky to work with because I would run into issues with them which I would later find out are open issues on the packages github page. For instance, I spent some time trying to implement, autoform's quickform into my project. The insert form was not working and I later found out the problem I was facing is an [ongoing issue](https://github.com/aldeed/meteor-autoform/issues/1575). I have faced similar issues to this in regards to Simple Schema and Materialize.

Along with this, I spent some time trying to use Blaze's data context so I could refer to this in my templates differently. After much confusion, I decided to no longer rely on the data context because I was receiving duplicates components in many areas of my application. This refactor took some time because I had to find different ways to access the same data.

## Future Additions

If I had more time to work on this project I would definitely like to incorporate a way to invite users to teams, and for users to be able to request an invitation to a team. At its current state, only team owners are able to add members and this is not done in an optimal way. Admins are able to add users to their team without any verification or permission from other uses which is not ideal for the users experience.

As well as this, I would have liked to have done a better job incorporating the Log in and Registration templates provided. Since I was using Meteor's account-password and useraccounts:unstyled to streamline user authentication and log in, I had to override the packages' built in form to emulate the templates using [aldeed:template-extensions](https://github.com/aldeed/meteor-template-extension). In this attempt, I was unable to override the log in / sign-up button to differentiate between the two pages, so both pages have a blue button that say sign-in.

I also would have spent some time writing tests for my project. Test Driven Development is something I have been working on prior to this project and I would have liked to at the very least established tests to see if my database queries are giving me back the information I expect.

Finally, I would spend more time enhancing the user experience. For instance, each user should be able to include a photo of themselves and links to their social media. Additionally, each team on the website should have their own team page where the information can be edited. I also would have liked to add client side validation to the form on the profile page. At its current state it is validating but there is nothing in place for the user to see what they did incorrectly.

## This application was built using:

- [Flow-Router](https://github.com/kadirahq/flow-router)
- [Simple Schema](https://github.com/aldeed/meteor-simple-schema)
- [Collection2](https://github.com/aldeed/meteor-collection2)
- [useraccounts:unstyled](https://github.com/meteor-useraccounts)
- [aldeed:template-extensions](https://github.com/aldeed/meteor-template-extension)
- [accounts-google](https://atmospherejs.com/?__hstc=256467284.285ffca5db5c8fe7d2184ad5d232985b.1446841870646.1446841870646.1446841870646.1&__hssc=256467284.1.1446841870646&__hsfp=3827431520)
- [accounts-password](https://atmospherejs.com/meteor/accounts-password)
- [meteortoys:allthings](https://github.com/MeteorToys/meteor-devtools)
- [materialize](https://materializecss.com/)
