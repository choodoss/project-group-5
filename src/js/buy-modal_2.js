(() => {
    const refs = {
        openBuyModalBtn: document.querySelector("[data-buy-modal-2-open]"),
        closeBuyModalBtn: document.querySelector("[data-buy-modal-2-close]"),
        buyModal: document.querySelector("[data-buy-2-modal]"),
        body: document.querySelector("body"),
    };

    refs.openBuyModalBtn.addEventListener("click", toggleModal);
    refs.closeBuyModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.buyModal.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
    }
})();