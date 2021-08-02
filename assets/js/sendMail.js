const EmailJSUserID = "user_DoOnYBoOadoZVbGED61tp";
const EmailJSAccessToken = "cfda4527438f42ac589a4a113c1eeb6d";


function sendMail(contactForm) {
  emailjs.init(EmailJSUserID); // Please see README.md file how to get own user id for it to work
  emailjs.send("gmail", "temp_1", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailAddress.value,
      "project_request": contactForm.projectSummary.value
  })
  .then(
      function(response) {
        $("#thankYouModal").modal('show');
        console.log("SUCCESS", response);
      },
      function(error) {
        $("#errorModal").modal('show');
        console.log("FAILED", error);
      }
  );
  return false;  // To block from loading a new page
}

function formReset() {
  document.getElementById("contactForm1").reset();
}