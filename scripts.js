document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    const links = document.querySelectorAll('aside nav ul li a');
    const headerHeight = document.querySelector('header').offsetHeight;
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const icon = document.getElementById('icon');
    const musicNameSpan = document.getElementById('musicName');

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

    // 图片点击放大功能
    function toggleEnlarge(image) {
        image.classList.toggle('enlarged');
    }

    // 使用事件委托为所有图片添加点击事件，优化性能
    document.querySelector('.gallery').addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            toggleEnlarge(event.target);
        }
    });

    // 音乐播放器功能：提取文件名并显示在页面上
    var src = audio.src;
    var fileName = src.substring(src.lastIndexOf('/') + 1).split('?')[0].split('.').slice(0, -1).join('.');
    fileName = decodeURIComponent(fileName);
    musicNameSpan.textContent = fileName;

    // 播放/暂停音频
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            icon.classList.add('rotating');
        } else {
            audio.pause();
            icon.classList.remove('rotating');
        }
    });

    // 音频结束时重置播放按钮状态
    audio.addEventListener('ended', function () {
        icon.classList.remove('rotating');
    });
});
