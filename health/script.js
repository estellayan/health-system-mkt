document.addEventListener('DOMContentLoaded', () => {
    // 动态加载 data.json 并渲染页面内容
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log('数据加载成功:', data);
            
            // 渲染动态功能模块
            const featuresContainer = document.querySelector('.features');
            if (featuresContainer && data.features) {
                featuresContainer.innerHTML = data.features.map(feature => `
                    <div class="feature">
                        <h3>${feature.title}</h3>
                        <p>${feature.description}</p>
                    </div>
                `).join('');
            }
        })
        .catch(error => console.error('Error loading data:', error));

    // CTA 按钮事件
    const ctaBtn = document.querySelector('.cta');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            alert('感谢关注柏泉健康，我们将竭诚为您服务！');
        });
    }
});
