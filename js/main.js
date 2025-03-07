function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  
  const startX = Math.random() * 100;
  const duration = 5 + Math.random() * 5;
  const size = 3 + Math.random() * 7;
  
  snowflake.style.left = `${startX}%`;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.animationDuration = `${duration}s`;
  
  document.getElementById('snowflakes-container').appendChild(snowflake);

  // 自动移除雪花元素
  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

// 每0.5秒创建一个新雪花
setInterval(createSnowflake, 500);

// 初始化创建10个雪花
for(let i = 0; i < 10; i++) {
  setTimeout(createSnowflake, Math.random() * 2000);
}
