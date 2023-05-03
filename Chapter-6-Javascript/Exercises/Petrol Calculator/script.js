document.getElementById('liter').value = 0;
document.getElementById('cost').value = 1.75;

const enter = document.getElementById('enter');
const output = document.getElementById('result');

function enter_() {
    if (document.getElementById('cost').value = 1.75) {
        if (document.getElementById('liter').value > 0) {
            const liter = document.getElementById('liter')
            cost = 1.75

            output.innerHTML = cost * liter.value + ' AED'
        } else {
            output.innerHTML = 0
        }
    }
}

enter.addEventListener('click', enter_)