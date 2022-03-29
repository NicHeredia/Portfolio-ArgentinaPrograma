const burgerbtn = document.querySelector("#burger-btn");
const linksmenu = document.querySelector(".navbar-links-responsive");

burgerbtn.addEventListener("click", (e) => {
    e.preventDefault();
    linksmenu.classList.toggle("show");
});

