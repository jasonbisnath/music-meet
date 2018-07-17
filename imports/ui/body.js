import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  genres: [
    { text: 'Hip Hop/Rap'},
    { text: 'Pop' },
    { text: 'Country' },
    { text: 'Rock' },
    { text: 'Jazz' },
    { text: 'Classical' }
  ],
});

Template.body.helpers({
  users: [
    { name: 'JOE', genre: 'Pop', instrument: 'Guitar'},
    { name: 'BOB', genre: 'Country' },
    { name: 'IDK', genre: 'Hip Hop/Rap'},
    { name: 'IDKK', genre: 'Classical'},
  ],
});
