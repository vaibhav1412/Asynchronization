var button = document.getElementById("showBtn");
    var box = document.getElementById("messageBox");

    button.addEventListener("click", function () {
      showMessage("Hello world", 3000);
    });

    function showMessage(message, duration) {
      box.innerText = message;
      box.style.opacity = 1;

      setTimeout(function () {
        box.style.opacity = 0;
      }, duration);
    }