document.getElementById("placeorder").onclick = function () {
    alert('your order is placed')
    window.location='index.html';
};
Email.send({
    Host : "smtp.gmail.com",
    Username : "painobaliquid@gmail.com",
    Password : "fmsm pobs puhm dddh",
    To : document.getElementById("email").value,
    From : 'painobaliquid@gmail.com',
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
)

