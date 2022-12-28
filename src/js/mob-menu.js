(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        closeMenuBtn: document.querySelector("[data-menu-close]"),
        menu: document.querySelector("[data-menu]"),
        btn: document.querySelector("[btn-menu]"),
        body: document.querySelector("body"),
    };

    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.menu.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
        refs.btn.classList.toggle("change");
    }
})();