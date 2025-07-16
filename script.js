document.addEventListener("DOMContentLoaded", function () {
    const scrollBars = document.querySelectorAll("#scrollBar span");
    // Helper to set active bar
    function setActiveBar(index) {
        scrollBars.forEach((bar, i) => {
            if (i === index) {
                bar.classList.add("active-Scrollbar");
                bar.classList.remove("non-active-Scrollbar");
            } else {
                bar.classList.add("non-active-Scrollbar");
                bar.classList.remove("active-Scrollbar");
            }
        });
    }
    // Default: first bar active
    setActiveBar(0);

    const featuredSection = document.getElementById("featured-breads");
    const footerSection = document.querySelector("footer"); // Add footer later

    // Observe featured breads
    const featuredObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveBar(1);
                } else {
                    setActiveBar(0);
                }
            });
        },
        { threshold: 0.3 }
    );
    if (featuredSection) featuredObserver.observe(featuredSection);

    // Observe footer (when you add it)
    if (footerSection) {
        const footerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveBar(2);
                    } else {
                        setActiveBar(1);
                    }
                });
            },
            { threshold: 0.3 }
        );
        footerObserver.observe(footerSection);
    }
});