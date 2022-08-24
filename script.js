let button = document.querySelector('#button-status'),
    input = document.querySelector('#password')

button.addEventListener('click', function() {
    if (input.value.length > 0) {
        if (input.type == 'password') {
            input.type = 'text'
            button.innerText = 'Ocultar'
            return true
        }
        input.type = 'password'
        button.innerText = 'Exibir'
    } else {
        alert('O campo da senha esta vázio')
    }
})