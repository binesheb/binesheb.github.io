(function(){
    "use strict";
    var hero = document.getElementsByClassName("ts-full-screen");
    if (hero.length) hero[0].style.height = window.innerHeight + "px";

    var social = document.querySelectorAll(".ts-social-icons a");
    var urls = ["https://github.com/binesheb", "https://www.instagram.com/binesheb/"];
    social.forEach(function(link, index) {
        if (index < urls.length) {
            link.href = urls[index];
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        } else {
            link.style.display = "none";
        }
    });

    var cards = document.querySelectorAll("#my-expertise .ts-item");
    var expertise = [
        ["Technology & Software", "Building practical websites, applications, APIs, dashboards and digital tools that turn operational requirements into usable systems."],
        ["Photography", "Photography focused on people, places, products, architecture, travel and everyday moments, with an emphasis on composition and visual storytelling."],
        ["Creative Production", "Working with photography, video and digital content to document ideas, communicate information and support creative and professional projects."],
        ["Design & Communication", "Creating clear digital experiences, interfaces, visual systems and communication where function and presentation need to work together."],
        ["Engineering & Systems", "Designing connected solutions across hardware, software, networking and automation, with attention to reliability, maintainability and real-world constraints."],
        ["Apps & Automation", "Developing focused applications and automation workflows that connect people, processes, devices and data while reducing repetitive work."]
    ];
    cards.forEach(function(card, index) {
        if (!expertise[index]) return;
        var title = card.querySelector("h4");
        var body = card.querySelector(".ts-item-body p");
        if (title) title.textContent = expertise[index][0];
        if (body) body.textContent = expertise[index][1];
        var footer = card.querySelector(".ts-item-footer");
        if (footer) footer.style.display = "none";
        var icon = card.querySelector(".icon img");
        if (icon) icon.alt = expertise[index][0];
    });

    var about = document.querySelector("#about-me .col-md-6:nth-child(2) > p");
    if (about) {
        about.innerHTML = "I work at the intersection of systems, technology, design, and people.<br><br>Over the years, I’ve built my foundation through engineering, design, photography, and hands-on technical work. Today, I apply this background to solve real-world problems where clarity, coordination, structure, and practical execution matter.<br><br>I enjoy building things from the ground up—from focused utilities and automation tools to larger systems that connect people, processes, hardware, and software. My goal is simple: make complex things clearer, more reliable, and easier to use.";
    }

    var contactLink = document.querySelector('#about-me a[href="#contact"]');
    if (contactLink) contactLink.href = "#form-contact";

    document.querySelectorAll('.navbar a[href="#my-foundations"], .navbar a[href="#testimonials"]').forEach(function(link) {
        link.parentNode.removeChild(link);
    });
})();
