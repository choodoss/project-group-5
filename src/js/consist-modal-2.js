(() => {
    const refs = {
        openConsistModalBtn: document.querySelector("[data-consist-modal-2-open]"),
        closeConsistModalBtn: document.querySelector("[data-consist-modal-2-close]"),
        consistModal: document.querySelector("[data-consist-modal-2]"),
        body: document.querySelector("body"),
    };

    refs.openConsistModalBtn.addEventListener("click", toggleModal);
    refs.closeConsistModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.consistModal.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
    }
})();