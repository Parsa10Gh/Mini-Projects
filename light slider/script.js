const rangeInput = document.querySelector('input')
const container = document.querySelector('.container')


rangeInput.addEventListener('input', function () {
    container.style.filter = 'brightness(' + rangeInput.value + '%)'
})