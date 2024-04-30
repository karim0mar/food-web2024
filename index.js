function is_not_null(element) {
  return element != null && element != undefined;
}
/*Start By Mustafa*/

function Done ()
{
    alert("Your message has been sent");
}


var div = document.getElementById('contOfLetmenu');
if(is_not_null(div))
  div.style.display = 'none'
var display = 1 ;


function hideshow ()
{
if (display==0)
{
div.style.display='none';
display=1;
}

else
{
div.style.display='block';
display=0;

}
}


function validateForm() {
    

    var opinionText = document.getElementById('opinionText');
        if (opinionText.value.trim() === '') {
            alert('Please enter your opinion.');
            return false;
            opinionText.value = '';
        }
         
         else
         {
            alert('Sent succesfully');
            return true;
            opinionText.value = '';
         }
    }


function OPen (event)
    {
      event.preventDefault();
      if(confirm('Go to the website ?'))
      {
        window.open("https://www.eatingwell.com/");
      }
      else
      {

      }
    }
/*End By Mustafa*/




    
/*Start By Mark */

    function order ()
{
      document.getElementById('order').style.display='block'
}

function close_order(){
    document.getElementById('order').style.display='none';
    alert('your table ordered')
}

function alertt(){
    alert('We will contact you as soon as possible')
   }

/*End By Mark*/


/*Start By KM */
function fun (){
    let text;
    let name = prompt("please enter your name: ");
    if (name == null){
    }
    else {
    alert("Hello " + name + "\n How are you");
    }
}

/*End By KM */




/* Ar */
var myButtom =document.getElementById('my-button11'),
myInput =document.getElementById('my-input11');
if(is_not_null(myButtom))
  myButtom.onclick=function () {
    'use strict';
    if(this.textContent == 'show'){
    myInput.setAttribute('type','text');
  this.textContent='hide';}
  else{
    myInput.setAttribute('type','password');
    this.textContent='show';
  }
  };

/* Amr */

/* start by mark */

function alertt(){

  alert('We will contact you as soon as possible')
 
}

let nightModeSwitch = document.getElementById('night-mode-switch');

if(is_not_null(nightModeSwitch))

  nightModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('night-mode');
  });

let parag = document.getElementsByClassName("chefs-para");
let devs = document.getElementsByClassName("chefs-dev");

for (let index = 0; index < 6; index++) {
  if(is_not_null(devs[index])){
  devs[index].addEventListener("mouseenter", () => {
      parag[index].style = "visibility: visible";
  });
  devs[index].addEventListener("mouseleave", () => {
      parag[index].style = "visibility: hidden";
  });
}
}
/*end mark */

















/*start karim > */
function feedback() {
  /*
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:  “Helvetica Neue”,Helvetica,Arial,sans-serif;
    }  to js >
    */
    const injectttttingStyleEE = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
  `;
  
  let style = document.createElement('style');
  style.textContent = injectttttingStyleEE;
  document.head.appendChild(style);
  

window.onload = function() {
  const savedFeedback = localStorage.getItem('feedback');
  if (savedFeedback) { // if feedback saved exist
      document.getElementById('feedbackTextArea').value = savedFeedback;
  }
};
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Check required if true continuré else break
  
   alert("Feedback sent and saved successfully");
   // saving textarea VALUE >
    localStorage.setItem('feedback', document.getElementById('feedbackTextArea').value);
  });
}

/* about us Page */
/*  Teams Member Data->       */
const teamMembers = [
  { name: "Karim Omar", imgURL: "./img/profiles/karim-omar.jpg" , id:20230415},
  { name: "Karim Adel", imgURL: "./img/profiles/karim_adel.jpg" ,id:20230414},
  { name: "Mark Makram", imgURL: "./img/profiles/mark.jpg" ,id:20230433},
  { name: "Mostafa Mahmoud", imgURL: "./img/profiles/defultProfile.png" ,id:20230563},
  { name: "Karim Mohamed", imgURL: "./img/profiles/defultProfile.png" ,id:20230416},
  { name: "Amr Waleed", imgURL: "./img/profiles/defultProfile.png" ,id:20230389},
  { name: "Karim Mansour", imgURL: "./img/profiles/defultProfile.png" ,id:20230420}
  ];

/*  Class for some process like get member data->       */

const OurMembersProcesses = class {
  constructor(Name, ImgURL,id) {
    this.Name = Name;
    this.ImgURL = ImgURL;
    this.Id = id;
  }
  get ImageDiv(){

      /*  Create DIV for members->       */

      let DIV = document.createElement("li");
      DIV.style = "width: 200px; height: 250px; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); transition: transform 0.3s ease-in-out;"; 

      /*  Add Image for the DIV->       */

      let IMG = document.createElement("img");
      IMG.style = `width: 150px; height: 150px; border-radius: 50%; object-fit: cover;`;
      IMG.src = this.ImgURL;
      DIV.appendChild(IMG);

      /*  Add Member Name for the DIV->       */

      let NAME = document.createElement("label");
      NAME.innerText = this.Name;
      NAME.style = "text-align: center; margin-top: 10px; font-size: 18px; font-weight: bold; color: #ccc;";
      DIV.appendChild(NAME);
      
      /*  Add hover for the DIV->       */

      DIV.addEventListener("mouseenter", () => {
          DIV.style.transform = "scale(1.05)";
      });

      DIV.addEventListener("mouseleave", () => {
          DIV.style.transform = "scale(1)";
      });

      return DIV;
  }
  /*  Create table item for name->       */
  get TableNames(){
    let td = document.createElement("td");
    td.textContent = this.Name;
    td.style.width = "350px"
    td.style.padding = "10px";
    td.style.color = "#ccc"
    td.style.border = "1px solid #ddd";
    return td;
  }
    /*  Create table item for ID->       */

  get TableIDs(){
    let td = document.createElement("td");
    td.textContent = this.Id;
    td.style.width = "100px"
    td.style.padding = "10px";
    td.style.textAlign = "center";
    td.style.color = "#ccc"
    td.style.border = "1px solid #ddd";
    return td;
  }
};

function configAboutUs() {
  
/* flag to know which type is working (IMAGE or TABLE) */

let flag = 1;

/* Creates body and set his styles */

let bdy = document.body;
bdy.style = "margin: 0; padding: 0; width: 100%; height: 97vh; display: flex; justify-content: center; align-items: center; background-color: #1c1a23;";
bdy.style.flexDirection = "column";

const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = 'White Mode';
darkModeBtn.style.cssText = 'border-radius: 20px;position: fixed; top: 20px; left: 20px; padding: 10px; background-color: #333; color: #fff; border: none; cursor: pointer;';

    const style = document.createElement('style');
    style.textContent = `
        body.white-mode {
            background-color: #fff !important;
            *{color: #000 !important}; 
            button{
              background-color: #d2c8c8 !important;
              color : #000 !important;
            }
        }
    `;
    document.head.appendChild(style);


darkModeBtn.addEventListener('click', function(){
    document.body.classList.toggle('white-mode');
    if (darkModeBtn.textContent == "White Mode")
      darkModeBtn.textContent = "Dark Mode"
    else 
    darkModeBtn.textContent = "White Mode"

});

/* Append the button to the body */ 
document.body.appendChild(darkModeBtn);

/* Div that contains each member card */

let ABoutUsDiv = document.createElement("ul");
ABoutUsDiv.style = "list-style: none;width: 80%; max-width: 1200px; height: 100%; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; padding: 20px;";

/* loop for each member to read his data Using the ImageDiv form the class*/

teamMembers.forEach(member => {
let person = new OurMembersProcesses(member.name, member.imgURL);
ABoutUsDiv.appendChild(person.ImageDiv);
});
/* add div to the body */
bdy.appendChild(ABoutUsDiv);

/*create TableBtn to switch betwen Images and Tables and set his styles, hover, onclick*/

let TableBtn = document.createElement("button");
TableBtn.textContent = "Show Table";
TableBtn.style.cssText = "margin-bottom: 40px; width: 120px; height: 50px; background-color: #1c1a23; color: #ccc; font-weight: 700; cursor: pointer; font-family: 'Lexend Deca'; border: 2px solid #333; border-radius: 30px; transition: background-color 0.3s, border-color 0.3s;";

TableBtn.addEventListener("mouseover", ()=> {
    TableBtn.style.backgroundColor = "rgb(23, 22, 33)";
    TableBtn.style.boxShadow = "1px 1px 5px 2px rgb(69, 34, 34)";
    TableBtn.style.borderRadius = "15px";

});
TableBtn.addEventListener("mouseout", ()=> {
    TableBtn.style.backgroundColor = "#1c1a23";
    TableBtn.style.boxShadow = "none";
    TableBtn.style.borderRadius = "30px";
});

TableBtn.addEventListener("click", function() {
  if(flag){
  TableBtn.textContent = "Hide Table";
  bdy.removeChild(ABoutUsDiv);
  bdy.appendChild(TableDiv);
  bdy.removeChild(TableBtn);
  bdy.appendChild(TableBtn);
  flag = 0;
}else{
  bdy.removeChild(TableDiv);
  bdy.appendChild(ABoutUsDiv);
  bdy.removeChild(TableBtn);
  bdy.appendChild(TableBtn);
  TableBtn.textContent = "Show Table";
  flag = 1;
}
});
/* create div to be container for the table*/

TableDiv = document.createElement("div");
TableDiv.style.marginBottom = "30px";

/* create table */

table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "100%";
table.style.maxWidth = "600px";
table.style.border = "1px solid #ddddd";
table.style = " border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); transition: transform 0.3s ease-in-out;"

table.addEventListener("mouseenter", () => {
  table.style.transform = "scale(1.05)";
});

table.addEventListener("mouseleave", () => {
  table.style.transform = "scale(1)";
});
/* creating table header (NAME , ID )*/

let header = document.createElement("tr");

let  NameRaw = document.createElement("th");
NameRaw.textContent = "Name";
NameRaw.style = "padding:10px;border:1px solid #ddd;text-align:left;color:#fff"
header.appendChild(NameRaw);

let IDRaw = document.createElement("th");
IDRaw.textContent = "ID";
IDRaw.style = "padding:10px;border:1px solid #ddd;text-align:left;color:#fff"
header.appendChild(IDRaw);

/* add header to the table */

table.appendChild(header);

/* loop for every member to send his Data to the Class */ 

teamMembers.forEach(member => {
  /* creating row ex. Karim Omar  |  20230415 */
  let fullRow = document.createElement("tr");
  let person = new OurMembersProcesses(member.name,member.imgURL, member.id);
  fullRow.appendChild(person.TableNames); // append the name to the row
  fullRow.appendChild(person.TableIDs); // append the ID to the row
  table.appendChild(fullRow); //append the row to the table
  });


// Add search bar !!
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.id = 'searchInput';
searchInput.placeholder = 'Search by name or id ..';
searchInput.style = 'width: 450px; margin-bottom: 20px; padding: 8px; border-radius: 15px;';
TableDiv.appendChild(searchInput);

// Add event listener for search input
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
        const nameColumn = row.querySelector('td:nth-child(1)');
        const idColumn = row.querySelector('td:nth-child(2)');
        if (nameColumn || idColumn) {
            const name = nameColumn.textContent.toLowerCase();
            const id = idColumn.textContent.toLowerCase();
            if (name.includes(searchTerm) || id.includes(searchTerm)) {
                row.style.display = ''; // Show the row
            } else {
                row.style.display = 'none'; // Hide the row
            }
        }
    });
});
/* add the full table to the div */
TableDiv.appendChild(table);
/* add the switch button to the body*/
bdy.appendChild(TableBtn);  

}
/* ennd karim*/   