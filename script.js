// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate goal items when they come into view
gsap.from(".gsap-goal", {
    opacity: 0,
    y: 100,
    rotateX: 30,
    duration: 1.2,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".goal-grid",
        start: "top 80%",
    },
});

// Hover animation: bounce + scale + glow effect
document.querySelectorAll(".goal-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
            scale: 1.2,
            y: -10,
            boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)",
            duration: 0.4,
            ease: "bounce.out",
        });
    });

    icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
            scale: 1,
            y: 0,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power2.inOut",
        });
    });
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".gsap-heading", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".gsap-heading",
        start: "top 80%",
    }
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animate main headings
    gsap.from(".gsap-heading", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".gsap-heading",
            start: "top 80%",
        },
    });

    // Animate all product cards on scroll
    gsap.utils.toArray(".card").forEach((card, i) => {
        gsap.from(card, {
            duration: 0.8,
            opacity: 0,
            y: 30,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
        });
    });

    // Animate promo banner
    gsap.from("#promoBanner", {
        duration: 1.5,
        scale: 0.95,
        opacity: 0,
        ease: "power2.out",
    });

    // Animate indicators (All Products, Offers, etc.)
    gsap.from(".indicators h4", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
    });

    // Animate footer
    gsap.from(".footer-column", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".footer-section",
            start: "top 90%",
        },
    });
});
