const loadingBar = document.querySelector('.loading-bar');

loadingBar.addEventListener('animationend', () => {
    window.location.href = 'transfer.html';
});