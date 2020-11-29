var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://www.photosforclass.com/download/px_1061640",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 						dolore magna aliqua. Eget mi proin sed libero. Consequat interdum varius sit amet mattis vulputate enim. 						Purus gravida quis blandit turpis cursus in hac habitasse platea. Auctor urna nunc id cursus metus aliquam."
	},
	{
		name: "Desert Mesa",
		image: "https://www.photosforclass.com/download/px_803226",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 						dolore magna aliqua. Eget mi proin sed libero. Consequat interdum varius sit amet mattis vulputate enim. 						Purus gravida quis blandit turpis cursus in hac habitasse platea. Auctor urna nunc id cursus metus aliquam."
	},
	{
		name: "Canyon Floor",
		image: "https://www.photosforclass.com/download/px_2398220",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 						dolore magna aliqua. Eget mi proin sed libero. Consequat interdum varius sit amet mattis vulputate enim. 						Purus gravida quis blandit turpis cursus in hac habitasse platea. Auctor urna nunc id cursus metus aliquam."
	}
	
]

function seedDB(){
	// Remove all campgrounds
	Campground.deleteMany({}, function(err){
		/*if(err){
			console.log(err);
		}
		console.log("Removed campgrounds !!!");
		//Add a few campgrounds

		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err);
				}else{
					console.log("Added a campground");
					// create comments
					Comment.create(
						{
							text: "This place is great. But I wish there was internet.",
							author: "Homer"
						}, function(err, comment){
							if(err){
								console.log(err);
							}else{
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment.");
							}
							
						}
					)
				}
			});
		});*/
	
	});
	
	
	
}

module.exports = seedDB;
