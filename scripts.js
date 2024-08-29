document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        if (window.innerWidth <= 768) {
            document.querySelector('.sidebar').style.transform = 'translateX(-100%)';
        }
    });
});

document.querySelector('.sidebar-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
});

document.querySelector('.sidebar-toggle').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.transform === 'translateX(0px)') {
        sidebar.style.transform = 'translateX(-100%)';
    } else {
        sidebar.style.transform = 'translateX(0px)';
    }
});

document.addEventListener('click', function (e) {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.style.transform = 'translateX(-100%)';
    }
});
