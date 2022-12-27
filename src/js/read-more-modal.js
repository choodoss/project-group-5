(() => {
    const refs = {
        openReadModalBtn: document.querySelector("[data-read-modal-open]"),
        closeReadModalBtn: document.querySelector("[data-read-modal-close]"),
        readModal: document.querySelector("[data-read-modal]"),
        body: document.querySelector("body"),
    };

    refs.openReadModalBtn.addEventListener("click", toggleModal);
    refs.closeReadModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.readModal.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
    }
})();