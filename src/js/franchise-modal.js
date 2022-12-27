(() => {
    const refs = {
        openFranchiseModalBtn: document.querySelector("[data-franchise-modal-open]"),
        closeFranchiseModalBtn: document.querySelector("[data-franchise-modal-close]"),
        franchiseModal: document.querySelector("[data-franchise-modal]"),
        body: document.querySelector("body"),

    };

    refs.openFranchiseModalBtn.addEventListener("click", toggleModal);
    refs.closeFranchiseModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.franchiseModal.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
    }
})();