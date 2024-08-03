const frmEmail = document.getElementById("frm-email");
frmEmail.addEventListener("submit", sendEmail);

const serviceId = "service_6p5u68b";
const templateId = "template_fkcls39";
const apikey = "cbBaHqgC83GRajHDj";

function sendEmail(event) {
  event.preventDefault();
  emailjs.init(serviceId);

  emailjs
    .sendForm(serviceId, templateId, frmEmail, apikey)
    .then((result) => Swal.fire("Su mensaje se envio correctamente."))
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No ha sido posible enviar el mensaje!",
      });
    });
}
