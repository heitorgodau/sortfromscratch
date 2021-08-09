
const buildShuffleArray = (length, min, max) => {
  if (max < length) return console.error('Max number must be higher or equal than length')
  const shuffledArray = [];
  while (shuffledArray.length < length) {
    const randomInt = Math.ceil(Math.random() * length)
    if (!shuffledArray.includes(randomInt)) shuffledArray.push(randomInt)
  }
  return shuffledArray
}

const splitArr = (arr) => {
  return [[arr.splice(0, arr.length / 2)], arr]
}

const sortArr = (shuffledIntArray = []) => {
  console.log(shuffledIntArray);
  const sortedArr = []
  if (shuffledIntArray.length < 1 || shuffledIntArray[0] < shuffledIntArray[1]) {
    return shuffledIntArray
  }
  if (shuffledIntArray[0] > shuffledIntArray[1]) {
    sortedArr.push(shuffledIntArray[1],shuffledIntArray[0])
  }
  return sortedArr
}

const mergeAndSort = (arr1, arr2) => {
  const mergedArr = [];
  for (let i = 1; i < twoDArr.length; i += 1) {
    twoDArr[i][1]
  }
  
}


const shuffledArray = buildShuffleArray(10, 1, 20);
console.log(sortArr(shuffledArray));