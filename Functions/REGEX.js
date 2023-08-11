  const emailValidator = new RegExp('^.+@.+\..+$');
  const userInput = 'invalidemail@g';
  const isValid = emailValidator.test(userInput)
  console.log(isValid)


  //Identifiers

  const name = new RegExp('mad')
  console.log(name.test('madhurjo'))
  console.log(/mad/.test('madhurjo'))
  console.log(/[A-Z]/.test('madhurjo'))
  console.log(/[a-z]/.test('madhurjo'))
  console.log(/[0-9]/.test('madhurjo'))
  console.log(/[A-Za-z0-9 ]/.test('madhurjo'))
  console.log(/\s/.test('ma dhurjo')) //checks white spaces
  console.log(/^m/.test('madhurjo')) //checks first character
  console.log(/o$/.test('madhurjo')) //checks last character
  console.log(/(madhurjo|none)/.test('madhurjo'))

  //Quantifiers
  console.log(/[a-z]/.exec('maDHURJO'))
  console.log(/[a-z]*/.exec('maDHURJO'))
  console.log(/[a-z ]+/.exec('maDHURJO ok'))
  console.log(/[a-z ]{5}/.exec('maDHURJO ok')) //first 5 characters
  console.log(/[a-z ]{2,5}/.exec('maDHURJO ok'))






