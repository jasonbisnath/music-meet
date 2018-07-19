import { Template } from 'meteor/templating';
 
import { Artists } from '../api/artists.js';
 
import './body.html';

import { Accounts } from 'meteor/accounts-base';

// import './artists.js';

 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

var isShowing = true
function toggleVisible(filter, show, template) {
	var array = ["Rap", "Pop", "Country", "Rock", "Jazz", "Classical"];
	var divsToChange = [];
	for (var userContainer of template.findAll('.user-container')) {
		var classes = userContainer.className.split(" ");
		if (classes.indexOf(filter) === -1) {
			divsToChange.push(userContainer);
		}
	}

	var style = isShowing ? "none" : "inline";

	for (var divs of divsToChange) {
		divs.style.display = style;
	}
	isShowing = !isShowing;
}

 
Template.body.helpers({
  artists() {
    return Artists.find({});
  }
});

Template.body.events({
	'submit .new-user'(event, template) {
		event.preventDefault();
		Artists.insert({
			name: template.find('.name').value,
			contact: template.find('.contact').value,
			rap: template.find('.rap').checked,
			pop: template.find('.pop').checked,
			country: template.find('.country').checked,
			rock: template.find('.rock').checked,
			jazz: template.find('.jazz').checked,
			classical: template.find('.classical').checked,
			instrument: template.find('.instrument').value,
			links: template.find('.links').value,
		});
	},

	'click .rap-button'(event, template) {
		event.preventDefault();
		toggleVisible("Rap", isShowing, template);
		
	},

	'click .pop-button'(event, template) {
		event.preventDefault();
		toggleVisible("Pop", isShowing, template);
		
	},

	'click .country-button'(event, template) {
		event.preventDefault();
		toggleVisible("Country", isShowing, template);
		
	},

	'click .rock-button'(event, template) {
		event.preventDefault();
		toggleVisible("Rock", isShowing, template);
		
	},

	'click .jazz-button'(event, template) {
		event.preventDefault();
		toggleVisible("Jazz", isShowing, template);
		
	},

	'click .classical-button'(event, template) {
		event.preventDefault();
		toggleVisible("Classical", isShowing, template);
		
	}
});