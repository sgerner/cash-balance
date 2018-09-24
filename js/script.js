/* Function assumes the ID of the element triggering the event is 
** the denomination value. Please make sure that id is only a number
** which matches the desired denomination.
*/
function total(event) {
    // Event handler because firefox does not have global events
    if (!e) var e = event;
    //Updates the box next to each denomination with the sum for that denomination
    let id = document.getElementById(e.target.id + '-result');
    let currencySum = e.target.id * e.target.value;
    console.log(currencySum);
    id.innerHTML = '$ ' + currencySum;
    id.value = currencySum;

    //Updates the total sum
    let inputArray = document.getElementsByName('denomination');
    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if(parseFloat(inputArray[i].value)) {
            sum += parseFloat(inputArray[i].value);
        }
    }
    
    document.getElementById('total-results').innerHTML = '$ ' + sum;
}