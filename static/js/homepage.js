document.addEventListener('DOMContentLoaded', function () {
    // 获取导航链接和iframe元素
    var navLinks = document.getElementById('navLinks').getElementsByTagName('a');
    var iframeContent = document.getElementById('iframeContent');

    // 为每个导航链接添加点击事件监听器
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (event) {
            // 阻止默认的链接跳转行为
            event.preventDefault();
            // 获取链接中的data-src属性值，并设置为iframe的新src
            var newSrc = this.getAttribute('data-src');
            iframeContent.src = newSrc;
            for (var j = 0; j < navLinks.length; j++){
                navLinks[j].classList.remove('text-zinc-600');
                navLinks[j].classList.remove('underline');
            }
            this.classList.toggle('text-zinc-600');
            this.classList.toggle('underline');
        });
    }
});