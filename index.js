// Your code here
let dodger = document.getElementById("dodger");
document.addEventListener("keydown", moveDodgerLeft(e))
function moveDodgerLeft(e) {
  if( e.key ==="ArrowLeft"){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers,10);
    if (left > 0){
      dodger.style.left = `${left-1}px`;
    }
  }
}