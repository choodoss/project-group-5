(() => {
    const refs = {
        openFranchiseModalBtn: document.querySelector("[data-franchise-modal-open]"),
        closeFranchiseModalBtn: document.querySelector("[data-franchise-modal-close]"),
        franchiseModal: document.querySelector("[data-franchise-modal]"),

    };

    refs.openFranchiseModalBtn.addEventListener("click", toggleModal);
    refs.closeFranchiseModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("franchise-modal-open");
        refs.franchiseModal.classList.toggle("is-hidden");
    }
    window.onclick = function (event) {
        if (event.target == franchiseModal) {
            franchiseModal.style.display = "none";
        }
    }
})();