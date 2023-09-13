function scrollToElement (elementSelector, instance = 0) {

    const elements = document.querySelectorAll(elementSelector);

    if(elements.length > instance){
      elements[instance].scrollIntoView ({behavior:'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");
const link7 = document.getElementById("link7");
//Scroll te Elementi i 1 me Class Header
link1.addEventListener('click', () => {
  scrollToElement('.header');
}); 

//Scroll te elementi i 2 me Class Header
link2.addEventListener('click', () => {
  scrollToElement('.header' ,1 );
});

link3.addEventListener('click', () => {
  scrollToElement('.container', 3);
});

link4.addEventListener('click', () => {
  scrollToElement('.nav-logo');
}); 

link5.addEventListener('click', () => {
  scrollToElement('.container' ,1 );
});

link6.addEventListener('click', () => {
  scrollToElement('.container' ,2);
});

link7.addEventListener('click', () => {
  scrollToElement('.container' ,3);
});


 Email.send({
  SecureToken : "a8f0f3e6-0ec5-4fe8-b3be-1a1913cb240b",
  To : 'elodverbovci5@gmail.com',
  From : email.value,
  Subject : "Contact Form",
  Body : message.value
}).then(
message => alert(message)
);

const form = document.querySelector('.contact-form');


function sendMsg(e){
  e.preventDefault();
  const name = document.querySelector('.name');
  email = document.querySelector('.email');
  msg = document.querySelector('.msg');

}

form.addEventListener('submit' , sendMsg);