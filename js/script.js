/* Function assumes the ID of the element triggering the event is 
** the denomination value. Please make sure that id is only a number
** which matches the desired denomination.
*/

function total() {
    //Updates the box next to each denomination with the sum for that denomination
    let id = document.getElementById(event.target.id + '-result');
    let currencySum = event.target.id * event.target.value;
    id.innerHTML = '$' + currencySum;
    id.value = currencySum;

    //Updates the total sum
    let inputArray = document.getElementsByName('denomination');
    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if(parseInt(inputArray[i].value)) {
            sum += parseInt(inputArray[i].value);
        }
    }
    
    document.getElementById('total-results').innerHTML = '$' + sum;
}