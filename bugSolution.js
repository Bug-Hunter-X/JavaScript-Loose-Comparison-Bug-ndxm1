function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false;
  } else {
    return false; 
  }
}
//Or even better
function foo(a, b) {
  return a === b;
} 