let input = "Hello World!";
let a = {};
for (let i = 0; i < input.length; i++) {
  let letter = input[i];
  if (a[letter]) {
    a[letter]++;
  } else {
    a[letter] = 1;
  }
}
console.log(a);