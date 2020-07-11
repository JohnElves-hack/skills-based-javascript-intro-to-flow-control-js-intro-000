function basicTeenager(age) {
  if age > 13 && age < 19{
    console.log('You are a teenager')
  }
  else{
    console.log('You are not a teenager')
  }
}

function teenager(age) {
  if age <= 12{
    console.log('You are a kid')
  }
}

function ageChecker(age) {
  if age >= 20{
    console.log('You are a grownup')
  }
}

function ternaryTeenager(age) {
  age > 13 && age < 19 ? console.log('You are a teenager') : console.log('You are not a teenager')
}

function switchAge(age) {
  switch (age) {
    case age > 13 && age < 19:
      console.log('You are a teenager')
      break;
    default:
      console.log('You have an age')
      break;
  }
}
