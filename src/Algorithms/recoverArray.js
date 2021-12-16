const arrayBars = document.getElementsByClassName('bar');
function recoverArray(initialArray) {
  for (let i = 0; i < initialArray.length; i++) {
    arrayBars[i].style.height = `${initialArray[i]}px`;
    arrayBars[i].style.backgroundColor = 'blue';
  }
}
export default recoverArray;
