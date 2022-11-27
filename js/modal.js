document.querySelectorAll(".my-modal").forEach((modal) => {
    modal.querySelector("button.btn-close").addEventListener("click", () => {
        modal.classList.remove("active");
    });
});

document.querySelectorAll("button[modal-target]").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector("#" + button.getAttribute("modal-target")).classList.add("active");
    });
});