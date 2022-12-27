(() => {
    const refs = {
        openReadModalBtn: document.querySelector("[data-read-modal-open]"),
        closeReadModalBtn: document.querySelector("[data-read-modal-close]"),
        readModal: document.querySelector("[data-read-modal]"),

    };

    refs.openReadModalBtn.addEventListener("click", toggleModal);
    refs.closeReadModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("read-modal-open");
        refs.readModal.classList.toggle("is-hidden");
    }
})();