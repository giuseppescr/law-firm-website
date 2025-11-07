document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const form = event.target;
          const formData = new FormData(form);
          const submitButton = document.getElementById("submit-button");

          submitButton.disabled = true;
          submitButton.textContent = "Sending...";

          fetch(form.action, {
            method: form.method,
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                alert("Message sent successfully!");
                form.reset();
              } else {
                alert("Error: " + data.message);
              }
            })
            .catch((error) => {
              console.error("Erro:", error);
              alert(
                "An error occurred while sending the message. Please try again later."
              );
            })
            .finally(() => {
              submitButton.disabled = false;
              submitButton.textContent = "SEND MESSAGE";
            });
        });