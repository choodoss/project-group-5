(() => {
    const refs = {
        openLocalModalBtn: document.querySelector("[data-local-modal-open]"),
        closeLocalModalBtn: document.querySelector("[data-local-modal-close]"),
        localModal: document.querySelector("[data-local-modal]"),
        body: document.querySelector("body"),
    };

    refs.openLocalModalBtn.addEventListener("click", toggleModal);
    refs.closeLocalModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.localModal.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
    }
})();