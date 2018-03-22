const { Node, List } = require('../src/LinkedList');

const process = (text) => {

    let errormessage = textValidation(text);
    if (errormessage) return errormessage;
    text = textSanitation(text);

    let array = text.split(',');
    let list= createlinkedList(array);

    let {mean, counter} = getMean(array);
    let deviation = getDeviation(array, mean,counter);
    return {
        mean,
        deviation,
        list
    }
};

const getMean = (array) => {
  let sum = 0,
      counter = 0;

  array.forEach(digit => {
      sum = sum + parseInt(digit,10);
      counter++;
  });

  return {
    mean: sum/counter,
    counter: counter
  }
}

const getDeviation = (array, mean,counter) => {
    let sum = 0;
    let item  = 0;

    array.forEach(digit => {
        item = digit - mean;
        let power = Math.pow(item,2);
        sum = power + sum ;
    });

    return Math.sqrt(sum / (counter -1));
  }



const createlinkedList = (array) => {
  let list = List();

  array.forEach((digit) => {
      let node = Node(digit);
      list.add(node);
  });

  return list;
}

const textValidation = (text) => {
  if (!text) {
      return 'no input specified';
  }

  if (/[^0-9, ]/.test(text)) {
      return 'you can only enter numbers and a special letter: ,';
  }
}

const textSanitation = (text) => {
  text = text.replace(/[\s\n]/g,'');
  text = text.replace(/,{2,}/g, ',');
  text = text.replace(/,$/g, '');
  return text;
}

module.exports = {
    process,
    textSanitation,
    textValidation,
    createlinkedList,
    getMean,
    getDeviation
};
