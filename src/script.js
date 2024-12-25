let links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
