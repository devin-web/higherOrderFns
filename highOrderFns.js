function multiply( num ){
  return function( newNum ){
    return newNum * num;
  }
}
console.log( (multiply(4))(6) );