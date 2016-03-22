// for (var i = 0; i < 20; i++) {
// 	Images.insert({
// 		category: "cats",
// 		src: "http://lorempixel.com/" + _.random(150, 300) + "/" + _.random(150, 300) + "/cats",
// 		title: 'lorem cats #' + (i + 1)
// 	});
// }

Template.Images.events({
	'click .category': function (e, tmpl) {
		Session.set('category', $(e.target).text());
	}
});

Template.Images.helpers({
	images: function () {
		return Images.find({category: Session.get('category') });
	}
});