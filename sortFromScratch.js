
const buildShuffleArray = (length) => {
  const shuffledArray = [];
  while(shuffledArray.length < length) {
    const randomInt = Math.ceil(Math.random() * length)
    if (!shuffledArray.includes(randomInt))  shuffledArray.push(randomInt)
  }
  return shuffledArray
}

const splitArr = (arr) => {
  // const fullArr = [...arr]
  // const splitedArray = [[],[]]
  const halfArr = arr.splice(0, fullArr.length / 2)
}

const shuffledArray = buildShuffleArray(100);

const sortArr = (shuffledArray) => {
  const 
}