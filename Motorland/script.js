
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.details-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('More details about this engine coming soon!');
        });
    });
});
