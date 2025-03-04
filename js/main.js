document.querySelectorAll('.image-item').forEach(img => {
    img.addEventListener('click', () => {
        // 显示大图预览
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;
        overlay.innerHTML = `<img src="${img.src}" style="max-width: 80%; max-height: 80%">`;
        overlay.onclick = () => overlay.remove();
        document.body.appendChild(overlay);
    });
});