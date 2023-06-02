const showButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeModel() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showButtons.length; i++) {
    showButtons[i].addEventListener('click', function () {
        openModal();
    })
}

closeModalBtn.addEventListener('click', function () {
    closeModel();
})

overlay.addEventListener('click', function () {
    closeModel();
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModel();
    }
})
