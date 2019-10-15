import data from './data/colors';

const colors = data.getColors();

const logColors = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }
  colors.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  const newColors = [];
  for (let j = 0; j < colors.length; j += 1) {
    if (colors[j].hexValue.startsWith('F')) {
      newColors.push(colors[j]);
    }
  } console.log(newColors);
  const filterColors = colors.filter((x) => x.hexValue.startsWith('F'));
  console.log('filter', filterColors);
};

const findFunc = () => {
  let colorToFind = {};
  for (let k = 0; k < colors.length; k += 1) {
    if (colors[k].name === 'green') {
      colorToFind = colors[k];
    }
  } console.log(colorToFind.hexValue);
  const colorFind = colors.find((x) => x.name === 'green');
  console.log(colorFind.hexValue);
};

const mapFunc = () => {
  const h1Tags = [];
  for (let l = 0; l < colors.length; l += 1) {
    h1Tags.push(`<h1>${colors[l].name}</h1>`);
  }
  console.log(h1Tags);
  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.log(colorMap);
};

const reduceFunc = () => {
  let total = 0;
  for (let m = 0; m < colors.length; m += 1) {
    total += colors[m].upVotes;
  }
  console.log(total);
  const reduceTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log(reduceTotal);
};

const init = () => {
  logColors();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
