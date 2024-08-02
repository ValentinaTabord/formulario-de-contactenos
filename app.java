const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', senEmail)

const serviceId = ''
const templateId = ''
const apikey = ''

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs
    .sendForm(serviceId,templateId.frmEmail,apikey)
    .then( (result) => Swal.fire ('Su mensaje se ha enviado con exito.') )
    .catch( (error) => {
        Swal.fire({
            icon: 'error',
            title: 'oops...',
            text: 'No ha sido posible enviar el mensaje',
        });
    });

    }
