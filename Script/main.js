
    // 移动端菜单切换
    document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // 关闭移动端菜单
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

    // 表单提交
    document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快与您联系。');
    this.reset();
});
