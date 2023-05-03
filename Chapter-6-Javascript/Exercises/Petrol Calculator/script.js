document.getElementById('liter').value = 0; /* makes specified id input have a default value */
document.getElementById('cost').value = 1.75; /* makes specified id input have a default value */

const enter = document.getElementById('enter'); /* assigns makeshift enter button to a value */
const output = document.getElementById('result'); /* assigns blank paragraph to a value */

function total() { /* creates instruction for calculation */
    if (document.getElementById('liter').value > 0) { /* if liter is = 0, then...*/
        const cost = document.getElementById('cost').value /* any input from user will be assigned as a value here */
        const liter = document.getElementById('liter').value  /* any input from user will be assigned as a value here */

        output.innerHTML = cost * liter + ' AED' /* blank paragraph shows calculated result */

    } else { /* if liter is <= 0, then... */
        output.innerHTML = 0 /* blank paragraph shows 0 */
    }
}

enter.addEventListener('click', total) /* when clicking enter button, it runs the function total()*/