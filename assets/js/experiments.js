// file name to download on click from the server
var file_download = '';

// send info to server when link pressed
const emailHandle = function(event) {
  let emailIn = document.getElementById('emailIn');
  if (validateEmail(emailIn.value)) {
    document.getElementById('emailError').style.display = 'none';
  } else {
    document.getElementById('emailError').style.display = 'block';
    return;
  }
  // submit email into sql if successful
  let filename = 'experiment.pdf'; // default name of the file when downloaded
  let url = 'post_email.php';
  let body = {
    email: emailIn.value,
    time: new Date().toISOString().slice(0, 19).replace('T', ' '),
    file: file_download
  };
  let payload = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  fetch(url, payload)
  .then((response) => {
    let dispos = response.headers.get('Content-Disposition');
    if (dispos != null) {
      // get the filename
      let pos = dispos.search('filename=');
      filename = dispos.slice(pos + 'filename='.length);
    }
    return response.blob();
  }).then(blob => downloadBlob(blob, filename));

  $.modal.close();
}
// on click for requesting email
const modal_click = function(filename) {
  $('#email_modal').modal({
    clickClose: false,
    fadeDuration: 150
  });
  file_download = filename;
};

const init = function(event) {
  let emailBtn = document.getElementById('emailBtn');

  emailBtn.addEventListener('click', emailHandle);
};

window.addEventListener('DOMContentLoaded', init);

// true if arg is an email string
function validateEmail(emailTest){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(emailTest);
}
// download blob on client pc
function downloadBlob(blob, filename) {
  let url = URL.createObjectURL(blob);
  // create download link that we can trigger to download
  const a = document.createElement('a');

  a.href = url;
  a.download = filename || 'download';

  const clickHandler = () => {
    setTimeout(() => {
      URL.revokeObjectURL(url);
      this.removeEventListener('click', clickHandler);
    }, 150);
  };

  a.addEventListener('click', clickHandler, false);

  // trigger the download
  a.click();
}
