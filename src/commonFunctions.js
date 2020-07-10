export function summarise(array) {
  let numbers = array.map(item => parseFloat(item.amount));
  let sum = numbers.reduce((a, b) => a + b, 0);
  return sum.toFixed(2);
}

export function filterOut(filter) {
  return function(array) {
    return array.category === filter;
  };
}

export function createAndSumEachCategory(category, state) {
  let names = {};
  for (let i = 0; i < category.length; i++) {
    names[category[i].toLowerCase()] = summarise(
      state.filter(filterOut(category[i]))
    );
  }
  return names;
}
