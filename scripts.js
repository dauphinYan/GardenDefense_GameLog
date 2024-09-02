document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    const links = document.querySelectorAll('aside nav ul li a');
    const headerHeight = document.querySelector('header').offsetHeight;

    // // 菜单按钮点击事件
    // menuButton.addEventListener('click', function() {
    //     if (sidebar.style.display === 'block') {
    //         sidebar.style.display = 'none';
    //     } else {
    //         sidebar.style.display = 'block';
    //     }
    // });

    // // 点击页面其他部分时关闭侧边栏
    // document.addEventListener('click', function(event) {
    //     if (!sidebar.contains(event.target) && event.target !== menuButton) {
    //         sidebar.style.display = 'none';
    //     }
    // });



    // 平滑滚动到对应位置，并调整偏移量
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 19;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // 定义图片点击放大功能
    function toggleEnlarge(image) {
        image.classList.toggle('enlarged');
    }

    // 为所有指定的图片添加点击事件，使用 toggleEnlarge 函数
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        image.addEventListener('click', function () {
            toggleEnlarge(this);
        });
    });
});
