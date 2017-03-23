/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Tarun Agarwal");
var email= "tarun@udacity.com";
var newEmail= email.replace("udacity","gmail");

var awesomethoughts= "My name is Tarun and I'm awesome";
var funthoughts=awesomethoughts.replace("awesome","fun!");
//$("#main").append(funthoughts);

var name= 'Tarun Agarwal';
var position='Full-stack developer';
var formattedname= HTMLheaderName.replace('%data%',name);
var formattedrole= HTMLheaderRole.replace('%data%',position);
$('#header').prepend(formattedrole);
$('#header').prepend(formattedname);

var bio={
  "name":"Tarun Agarwal",
  "role":"Java Developer",
  "contacts":{
    "mobile":"123456",
    "email":"tarun.agarwal.mail@gmail.com",
    "twitter":"@tarunroyal",
    "github":"tarun-agarwal",
    "blog":"www.tarun.io"
    "location":"Mississippi"
  },
  "bioPic":"images/fry.jpg"
  "welcomeMsg":"welcome to the Java World",
  "skills":["Java","J2EE"],

};
$("#topContacts").prepend(bio);
