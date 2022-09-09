function factorial(n) {
  let nFact = 1;
  while (n) {
    nFact *= n;
    n -= 1;
  }
  return nFact;
}
