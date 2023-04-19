
$(document).ready(function(){
  
  CurrentEmployee=JSON.parse(sessionStorage.getItem('Employee'));
  document.getElementById('EmpName').innerHTML =''+CurrentEmployee.empFirstName+' '+CurrentEmployee.empLastName+'';
 

   return false; 
 })

function changeColor(link) {
    // remove the "active" class from all links
    const links = document.querySelectorAll('nav a');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    
    // add the "active" class to the clicked link
    link.classList.add('active');
  }
  
  // add an event listener to the dropdown links
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
for (let i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener('click', function() {
    // remove the "active" class from all links
    const links = document.querySelectorAll('nav a');
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }
  
    // add the "active" class to the clicked link
    this.classList.add('active');
    
  });
}

function showMessageForm() {
  document.getElementById("message-form").style.display = "block";
}

function hideMessageForm() {
  document.getElementById("message-form").style.display = "none";
}

function submitMessage(event) {
  event.preventDefault();
  const message = event.target.elements.message.value;
  // You can send the message data to a server using Ajax here
  console.log(message);
  hideMessageForm();
  // You can add the message to the bulletin board here
  const bulletinBody = document.querySelector(".bulletin-body");
  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  bulletinBody.insertBefore(newMessage, bulletinBody.firstChild);
}