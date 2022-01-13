function concatenate(first, last) {
    var full;
    full = `My name is ${first} ${last} !`;
    return full;
  }
  function getName(firstName, lastName) {
    var result;
    result = concatenate(firstName, lastName);
    console.log(result);
  }
  getName('Zara', 'Williams');
  