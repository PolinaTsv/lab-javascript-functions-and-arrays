// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, wordForSearch) {
    if (array.includes(wordForSearch) === true){
        return true;
    } else {
        return false;
    }
}
doesWordExist(wordsFind, 'subset');

// Iteration #7: Count repetition

const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  countWords = 0;
  function howManyTimes(arr, word) {
    if (doesWordExist(arr, word) === true){
      arr.forEach((element) => element === word && countWords++)
      console.log(countWords);
    } else {
        console.log("There is no this word in the array");
    }
  }
  
  howManyTimes(wordsCount, 'matter');