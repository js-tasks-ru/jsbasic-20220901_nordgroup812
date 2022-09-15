function getMinMax(str) {
  let arr = str.split(' ').filter(num => typeof Number(num) === 'number' && !isNaN(num)).sort( (a, b) => a - b );
  return {min:Number(arr[0]), max:Number(arr[arr.length - 1])};
}
