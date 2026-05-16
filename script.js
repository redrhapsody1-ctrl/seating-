document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');
    const textareas = document.querySelectorAll('textarea');

    // Load saved content from local storage
    textareas.forEach((textarea, index) => {
        const savedValue = localStorage.getItem(`activity-${index}`);
        if (savedValue) {
            textarea.value = savedValue;
        }

        // Auto-save on input
        textarea.addEventListener('input', () => {
            localStorage.setItem(`activity-${index}`, textarea.value);
        });
    });

    // Save button click
    saveBtn.addEventListener('click', () => {
        alert('작성하신 활동 내용이 브라우저에 저장되었습니다! (나중에 다시 접속해도 남아있습니다.)');
    });

    // Reset button click
    resetBtn.addEventListener('click', () => {
        if (confirm('모든 내용을 삭제하시겠습니까?')) {
            textareas.forEach((textarea, index) => {
                textarea.value = '';
                localStorage.removeItem(`activity-${index}`);
            });
        }
    });
});
