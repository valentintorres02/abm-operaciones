import swal from 'sweetalert';

// Alerts

export const successAlert = (title, text) => {
  swal({
    title: title,
    text: text,
    icon: "success",
    button: "Aceptar",
  }).then(() => {
    window.location = "/operations"
  });
};