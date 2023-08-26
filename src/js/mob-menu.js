(() => {
    const refs = {
        menu: document.querySelector("[data-menu]"),
        btn: document.querySelector("[btn-menu]"),
        body: document.querySelector("body"),
    };

    refs.btn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.menu.classList.toggle("close-menu");
        refs.body.classList.toggle("no-scroll");
        refs.btn.classList.toggle("change");
    }
})();