// Your code here
let dodger = document.getElementById("dodger");
document.addEventListener("keydown", moveDodgerLeft)
function moveDodgerLeft() {
  if( e.key ==="ArrowLeft"){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers,10);
    if (left > 0){
      dodger.style.left = `${left-1}px`;
    }
  }
}