function modalWindows() {
    let moreBtn = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        closeBtn = document.querySelector(".popup-close");

    moreBtn.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash'");
        document.body.style.overflow = 'hidden';

    });

    closeBtn.addEventListener("click", function () {
        overlay.style.display = "none";
        moreBtn.classList.remove("more-splash'");
        document.body.style.overflow = '';
    });
}

module.exports = modalWindows;