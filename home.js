// section about permission button functionalities
permissionsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    permissions.classList.remove("hidden");
    permissions.classList.add("show");
    overlay.style.display = "block";
});

closePermissions.addEventListener("click", (event) => {
    event.preventDefault();
    permissions.classList.remove("show");
    permissions.classList.add("hidden");
    overlay.style.display = "none";
});

