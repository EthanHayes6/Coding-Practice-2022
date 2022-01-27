var count = 1;
var couuntElement = document.querySelector("#count");

console.log(couuntElement)

function add1() {
    count++;
    couuntElement.innerText = "The count is" + count;
    console.log(count);
}