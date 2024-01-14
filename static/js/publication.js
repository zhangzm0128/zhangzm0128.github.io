document.addEventListener('DOMContentLoaded', function() {
    var aElements = document.querySelectorAll('a[id^="bib_"]');

    // 为每个 a 元素添加点击事件监听器
    aElements.forEach(function (aElement) {
        aElement.addEventListener('click', function (event) {
            event.preventDefault();
            // 获取当前 a 元素的 ID
            var currentId = this.id;
            // 从 ID 中提取数字部分
            var targetId = currentId.replace('bib_', '');
    
            // 获取对应的 div 元素
            var targetDiv = document.getElementById(targetId);    
            // 显示或隐藏 div 元素
            if(targetDiv.className.indexOf('bibtex') != -1) {
                targetDiv.className.indexOf('noshow') == -1 ? targetDiv.className = 'bibtex noshow': targetDiv.className = 'bibtex';
            }
        });
    });
});