function isSameType(value1, value2) {
  //your js code here
	 if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) {
    return true;
  }

  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    return false;
  }
  const type1 = typeof (isNaN(Number(value1)) ? value1 : Number(value1));
  const type2 = typeof (isNaN(Number(value2)) ? value2 : Number(value2));

  return type1 === type2;
	
}

// do not change the code below.as
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
