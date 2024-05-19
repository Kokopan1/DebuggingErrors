let input = process.argv[2];

if (input)
  console.log(reverse(input));

const reverse = function(original) {
  return original.split('').reverse().join('');//you can chain them like this
 
};

console.log(reverse('banana'));