(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-buy-modal]"),
        modal: document.querySelector("[data-consist-modal]"),
        modal: document.querySelector("[data-franchise-modal]"),
        modal: document.querySelector("[data-location-modal]"),
        modal: document.querySelector("[data-read-more-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle("is-hidden");
    }
})();