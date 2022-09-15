function camelize(str) {
  let func = (elem) => elem[0].toUpperCase() + elem.slice(1);
  if (str == '') {return '';}
  if (str[0] == '-') {return str.slice(1).split('-').map(func).join('');}
  str = str.split('-').map(func).join('');
  return str[0].toLowerCase() + str.slice(1);
}
