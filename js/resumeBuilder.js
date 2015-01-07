 

var name= "Naila Khalawi";
var role="Font-end Ninja";

var formattedName= HTMLheaderName.replace("%data%",name);
var formattedRole= HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//CREATE OUT OBJECTS: bio, education, work, projects============================

var bio= { 	"name":"Naila Khalawi",
			"role":"Front end developer",
			"contacts":{"mobile":"0504888888",
						"email":"n.khalawi@gmail.com",
						"twitter":"@nkhalawi",
						"location":"Jeddah, Saudi Arabia"},
			"welcomeMessage":"Welcome to my page! here you can find all you need to know about me and what I can do.",
			"skills":["prototyping","UX","UI design","front-end development"],
			"biopic":"http://placehold.it/100x100",
			"display": function(){
				//display bio picture
				var formattedPic=HTMLbioPic.replace("%data%",bio.biopic);
				$("#header").append(formattedPic);
				//display welcome msg
				var formattedWelcome= HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage)
				$("#header").append(formattedWelcome);

				//display header and footer contact info
				var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
				var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
				var formattedTwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);
				var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);

				$("#topContacts").append(formattedMobile);
				$("#topContacts").append(formattedEmail);
				$("#topContacts").append(formattedTwitter);
				$("#topContacts").append(formattedLocation);

				$("#footerContacts").append(formattedMobile);
				$("#footerContacts").append(formattedEmail);
				$("#footerContacts").append(formattedTwitter);	
				$("#footerContacts").append(formattedLocation);	

				//check to see if there are any skills then append them
				if (bio["skills"].length > 0) {
					$("#header").append(HTMLskillsStart);

					var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
					$("#skills").append(formattedSkill);

					formattedSkill= HTMLskills.replace("%data%",bio.skills[1]);
					$("#skills").append(formattedSkill);

					formattedSkill= HTMLskills.replace("%data%",bio.skills[2]);
					$("#skills").append(formattedSkill);
					
					formattedSkill= HTMLskills.replace("%data%",bio.skills[3]);
					$("#skills").append(formattedSkill);
				}
			}
}

var education= 
	{
    "schools": [
        {
            "name": "Dar AlHekma",
            "location": "Jeddah, Saudi Arabia",
            "degree":"Bsc",
            "majors": ["MIS"],
            "dates":"2005",
            "url":"www.daralhekma.edu.sa"
        },
        {
            "name": "UC Berkeley",
            "location": "Berkeley, USA",
            "degree":"MS",
            "majors": ["MIMS"],
            "dates":"2013",
            "url":"www.berkeley.edu"
        }
    ],
    "onlinecourses": [
    	{
    		"title":"Front End Developer",
    		"school":"udacity",
    		"date":"2014",
    		"url":"udacity.com",
    	},    
    ],
   "display": function(){

		for (school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[school].name);	
			var formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[school].degree);	
			var formattedSchoolTitle=formattedSchoolName+formattedSchoolDegree;
			$(".education-entry:last").append(formattedSchoolTitle);

			var formattedSchoolDates= HTMLschoolDates.replace("%data%",education.schools[school].dates);	
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[school].location);	
			$(".education-entry:last").append(formattedSchoolLocation);

			for(major in education.schools[school].majors){
				var formattedSchoolMajor= HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);	
				$(".education-entry:last").append(formattedSchoolMajor);
			}
		}

		for (course in education.onlinecourses){
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			var formattedOnlineClassTitle=HTMLonlineTitle.replace("%data%", education.onlinecourses[course].title);
			var formattedOnlineSchool=HTMLonlineSchool.replace("%data%", education.onlinecourses[course].school);
			var formattedCourseTitle=formattedOnlineClassTitle+formattedOnlineSchool;
			$(".education-entry:last").append(formattedCourseTitle);

			var formattedOnlineCourseDates=HTMLonlineDates.replace("%data%", education.onlinecourses[course].date);
			var formattedOnlineCourseURL=HTMLonlineURL.replace("%data%", education.onlinecourses[course].url);
			
			$(".education-entry:last").append(formattedOnlineCourseDates);
			$(".education-entry:last").append(formattedOnlineCourseURL);
		}
	}
};


var work={ 
	"jobs":[
		{
			"employer":"Emaar",
			"title":"Systems analyst",
			"location":"Jeddah, Saudi Arabia",
			"dates":"2007-2009",
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		
		{
			"employer":"KAUST",
			"title":"Business analyst",
			"location":"Thuwal, Saudi Arabia",
			"dates":"2009-2011",
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."		
		}
	],
	"display":function(){
	//format and append work information to the page
		for (job in work.jobs){
			//create new div for work exp
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
			
			//concat employer and title
			var formattedEmployerTitle=formattedEmployer+formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			
			//add position details- date and desc
			var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects={
    "projects": [
        {
            "title": "Swop",
            "dates": "fall 2012",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["http://placehold.it/200x100","http://placekitten.com/200/300","http://placekitten.com/200/300"]
        },
        {
            "title": "inpica",
            "dates": "spring 2013",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["http://placehold.it/200x100","http://placekitten.com/200/300","http://placekitten.com/200/300"]
        }
    ],
    "display":function(){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			console.log(projects.projects[project].title);
			//append proj title
			var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			console.log(formattedTitle);
			//append dates
			var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			//append desc
			var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			//append images
			if (projects.projects[project].images.length >0){
				for(image in projects.projects[project].images){
					var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images);
					$(".project-entry:last").append(formattedImage);
				}
			}
				
		}
	}
};

//FUNCTIONS::: DISPLAY INFO FROM THE OBJECTS ON THE RESUME===================

work.display();
education.display();
projects.display();
bio.display();


//OTHER FEATURES:::::==========================================================

//track user clicks 
$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	console.log("this is the xy val"+x+" -- "+y);
	logClicks(x,y);
}
	)

//internationalize name button
function inName(name){
	
	name=name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1];
}
$('#main').append(internationalizeButton);


//to show a map

$("#mapDiv").append(googleMap);

