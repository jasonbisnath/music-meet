import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'Hip Hop/Rap' },
    { text: 'Pop' },
    { text: 'Country' },
    { text: 'Rock' },
  ],
});

