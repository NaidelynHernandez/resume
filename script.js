

let contentResumecontent = document.getElementById('Resumecontent');


let naidelynData = [
  {
    "Company" : "Chick-fil-A",
    "color" : "#807182",
    "location": "New York, NY",
    "info" : ["Created a welcoming and cordial atmosphere for arriving customers", "Handled cash register, responsible for taking orders and processing cash and credit card transactions", "Addressed customer feedback and resolved customer complaints",
    "Maintained a proactive and pleasant attitude towards customers"]
  },

  {
    "Company" : "Teen Activist Project || ACLU",
    "color" : "#807182",
    "location": " New York, NY",
    "info" : [ "Involved in a remote leadership development program", "Used Canva to design informative slideshow graphics for TAP instagram sub committee", "Learned about civil rights alongside NYCLU professionals"]
  },
  {
    "Company" : "Tech Flex leaders",
    "color" : "#807182",
    "location": "New York, NY ",
    "info" : ["Handpicked to participate in a year-long immersive out-of-school program", "Gained more in-depth exposure to front and back-end web development (HTML,CSS, Bootstrap, Repli.it)", "Engaged in digital collaborative learning (160 hours of coding training)"]
  },
  {
    "Company" : "Make the Road New York",
    "color" : "#807182",
    "location": "Corona, NY ",
    "info" : ["Supervised a back to school supply nonprofit event", "Distributed free school supplies", "Directed arriving parents/families"]
  }
];


for (var i = 0; i < naidelynData.length; i++) {
  createDatabase(naidelynData[i]);
}

function createDatabase(data){

let newSection= document.createElement("DIV");
newSection.style.backgroundColor= data['color'];
newSection.classList.add("content");

let companyinfo= document.createElement("H3");
companyinfo.classList.add('companyname');
companyinfo.innerText= data["Company"];
newSection.appendChild(companyinfo);




let locationinfo = document.createElement("H3");
locationinfo.innerText = "";
newSection.appendChild(locationinfo);

let loc=document.createElement("p");
loc.classList.add('loc');
loc.innerText= data["location"];
newSection.appendChild(loc);

let breakcontent=document.createElement("br");
breakcontent.classList.add('br');
newSection.appendChild(breakcontent);



let newinfo = document.createElement("UL");
  newSection.appendChild(newinfo);

  for (var i = 0; i < data['info'].length; i++) {
      var currentinfo = data['info'][i];
      var newlist = document.createElement("LI");
      newlist.innerText = currentinfo;
      newinfo.appendChild(newlist);
    }

contentResumecontent.appendChild(newSection);


}
