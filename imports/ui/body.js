import { Template } from 'meteor/templating';
 
import './body.html';

var show = "everything";
window.onload = function() {
	document.querySelector('.hiphop-button').addEventListener('click', function() {
		if (show === "everything") {
			document.querySelector('.Pop').style.display = "none";
			document.querySelector('.Country').style.display = "none";
			document.querySelector('.Rock').style.display = "none";
			document.querySelector('.Classical').style.display = "none";
			document.querySelector('.Jazz').style.display = "none";
			show = "hiphop";
		} else {
			console.log('else');
			document.querySelector('.Pop').style.display = "inline";
			document.querySelector('.Country').style.display = "inline";
			document.querySelector('.Rock').style.display = "inline";
			document.querySelector('.Classical').style.display = "inline";
			document.querySelector('.Jazz').style.display = "inline";
			show = "everything";
		}
	});	
	document.querySelector('.pop-button').addEventListener('click', function() {
		if (show === "everything") {
			document.querySelector('.Rap').style.display = "none";
			document.querySelector('.Country').style.display = "none";
			document.querySelector('.Rock').style.display = "none";
			document.querySelector('.Classical').style.display = "none";
			document.querySelector('.Jazz').style.display = "none";
			show = "pop";
		} else {
			console.log('else');
			document.querySelector('.Rap').style.display = "inline";
			document.querySelector('.Country').style.display = "inline";
			document.querySelector('.Rock').style.display = "inline";
			document.querySelector('.Classical').style.display = "inline";
			document.querySelector('.Jazz').style.display = "inline";
			show = "everything";
		}	
	});
};

Template.body.helpers({
  users: [
    { name: 'JOE', genre: 'Pop', instrument: 'Guitar', custom: "blah"},
    { name: 'BOB', genre: 'Country' },
    { name: 'IDK', genre: 'Rap'},
    { name: 'IDKK', genre: 'Classical'},
    { name: 'veronica', genre: 'Rock'},
    { name: 'Vithya', genre: 'Jazz'}
  ]
});