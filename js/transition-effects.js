document.addEventListener("DOMContentLoaded", () => {
    const elemnts = document.querySelectorAll(".transition-element");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("transition--visible");
                }, index * 500);
            }
        });
    }, {
        threshold: 0.1
    })

    elemnts.forEach(element => {
        observer.observe(element);
    })
});