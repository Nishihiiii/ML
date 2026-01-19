
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    
    themeBtn.addEventListener('click', () => {
        
        body.classList.toggle('light-theme');

      
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

});

const submitBtn = document.getElementById('submit-comment');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    if (submitBtn && commentInput && commentsList) {
        loadComments();

        submitBtn.addEventListener('click', () => {
            const text = commentInput.value.trim();
            if (text) {
                addComment('Гость', text);
                saveComment('Гость', text);
                commentInput.value = ''; 
            } else {
                alert('Пожалуйста, введите текст комментария.');
            }
        });
    }

    function addComment(name, text) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
        commentsList.prepend(div);
    }

    function saveComment(name, text) {
        let comments = JSON.parse(localStorage.getItem('pageComments')) || [];
        comments.push({ name, text });
        localStorage.setItem('pageComments', JSON.stringify(comments));
    }

    function loadComments() {
        let comments = JSON.parse(localStorage.getItem('pageComments')) || [];
        comments.forEach(c => addComment(c.name, c.text));
    }
});
