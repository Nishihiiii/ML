document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. ПРОВЕРКА ТЕМЫ
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
        });
    }

    // 2. ЛОГИКА КОММЕНТАРИЕВ (вынесена отдельно, чтобы ничего не ломалось)
    const commentsList = document.getElementById('comments-list');
    const submitBtn = document.getElementById('submit-comment');
    const commentInput = document.getElementById('comment-input');

    if (commentsList && submitBtn) {
        // Загрузка
        const saved = JSON.parse(localStorage.getItem('pageComments')) || [];
        saved.forEach(c => renderComment(c.name, c.text));

        // Клик
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

