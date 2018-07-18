import { Template } from 'meteor/templating';
 
import { Users } from '../api/users.js';
 
import './body.html';


function toggleVisible(filter, show, template) {
	var array = ["Rap", "Pop", "Country", "Rock", "Jazz", "Classical"];
	for (var genre of array) {
		if (genre !== filter) {
			if (show) {
				for (var thing of template.findAll('.' + genre)) {
					thing.style.display = "inline";
				}
			} else {
				for (var thing of template.findAll('.' + genre)) {
					thing.style.display = "none";
				}
			}
		}
	}
}

 
Template.body.helpers({
  users() {
    return Users.find({});
  }
});

Template.body.events({
	'submit .new-user'(event, template) {
		event.preventDefault();
		Users.insert({
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
		console.log('hi');
		toggleVisible("Rap", false, template);
	},
});