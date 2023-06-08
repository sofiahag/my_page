$(window).on('load', function () {
    $('#loading').hide();
})

$(document).ready(function(){
    $("[rel=tooltip]").tooltip({ placement: 'top'});
});

function sendMail() {
    emailjs.init('SknApyR2KX3w5rDMs');
    var params = {
      message: document.getElementById("message").value
    };

    const serviceID = "service_vpb86sm";
    const templateID = "template_ngd8q4q";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message was sent successfully!");
    })
    .catch((err) => console.log(err));
}