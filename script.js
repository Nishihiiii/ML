document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Проверка темы
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeBtn.textContent = 'Темная тема';
    } else {
        themeBtn.textContent = 'Светлая тема';
    }
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            
            if (body.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
                themeBtn.textContent = 'Темная тема';
            } else {
                localStorage.setItem('theme', 'dark');
                themeBtn.textContent = 'Светлая тема';
            }
        });
    }
});
    

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('submit-comment');
    const input = document.getElementById('comment-input');
    const list = document.getElementById('comments-list');
    
    if (!btn || !input || !list) return;
    
    btn.addEventListener('click', function() {
        const text = input.value.trim();
        if (!text) return;
        
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `
            <strong>Гость</strong>
            <p>${text}</p>
        `;
        
        list.prepend(comment);
        input.value = '';
        
 
        let comments = JSON.parse(localStorage.getItem('simpleComments')) || [];
        comments.unshift({text: text, author: 'Гость', date: new Date().toLocaleString()});
        localStorage.setItem('simpleComments', JSON.stringify(comments.slice(0, 50))); 
    });
    
    
    const saved = JSON.parse(localStorage.getItem('simpleComments')) || [];
    saved.forEach(c => {
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `<strong>${c.author}</strong><p>${c.text}</p>`;
        list.appendChild(comment);
    });
});


