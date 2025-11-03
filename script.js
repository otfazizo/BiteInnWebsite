document.addEventListener("DOMContentLoaded", function () {
  const phoneNumber = "254797843014"; 

  const buttons = document.querySelectorAll(".orderBtn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = btn.getAttribute("data-item");
      const message = encodeURIComponent(
        `Hello Bite Inn! I'd like to order ${item} 🍴`
      );
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappLink, "_blank");
    });
  });
});
