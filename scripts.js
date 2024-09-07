document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    const links = document.querySelectorAll('aside nav ul li a');
    const headerHeight = document.querySelector('header').offsetHeight;

    // 菜单按钮点击事件：显示/隐藏侧边栏
    menuButton.addEventListener('click', function (event) {
        event.stopPropagation();
        sidebar.classList.toggle('open');
    });

    // 点击页面其他部分时，隐藏侧边栏
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && event.target !== menuButton) {
            sidebar.classList.remove('open');
        }
    });


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

    const playPauseBtn = document.getElementById('playPauseBtn');
    const audio = document.getElementById('audio');
    const icon = document.getElementById('icon');
    const musicNameSpan = document.getElementById('musicName');

    // 从audio元素的src属性中提取文件名  
    var src = audio.src;
    var fileName = src.substring(src.lastIndexOf('/') + 1);
    fileName = fileName.split('?')[0];  // 如果有查询字符串，去掉它
    fileName = fileName.split('.').slice(0, -1).join('.'); // 移除扩展名

    fileName = decodeURIComponent(fileName);
    // 设置span元素的文本为文件名  
    musicNameSpan.textContent = fileName;

    // 切换播放/暂停  
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            icon.classList.add('rotating');
        } else {
            audio.pause();
            icon.classList.remove('rotating');
        }
    });

    // 可选：处理音频自然结束时的情况  
    audio.addEventListener('ended', function () {
        icon.classList.remove('rotating');
        playPauseBtn.classList.remove('pause');
        playPauseBtn.classList.add('play');
    });
});
