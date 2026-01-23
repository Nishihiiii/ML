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
    
    const commentsList = document.getElementById('comments-list');
    const submitBtn = document.getElementById('submit-comment');
    const commentInput = document.getElementById('comment-input');

    if (commentsList && submitBtn) {
       
        const saved = JSON.parse(localStorage.getItem('pageComments')) || [];
        saved.forEach(c => renderComment(c.name, c.text));

       
        submitBtn.addEventListener('click', () => {
            const text = commentInput.value.trim();
            if (text) {
                renderComment('Гость', text);
                const current = JSON.parse(localStorage.getItem('pageComments')) || [];
                current.push({ name: 'Гость', text });
                localStorage.setItem('pageComments', JSON.stringify(current));
                commentInput.value = '';
            }
        });
    }

    function renderComment(name, text) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
        commentsList.prepend(div);
    }
});


