const brain = require('brain.js');

const net = new brain.recurrent.LSTMTimeStep({
  inputSize: 2,
  hiddenLayers: [10],
  outputSize: 2
});

//Same test as previous, but combined on a single set
const trainingData = [
  [[1,1],[2,2],[3,3],[4,4],[5,5]]
];

net.train(trainingData, { log: true, errorThresh: 0.09 });

const closeToFiveAndOne = net.run([[7,7],[8,8],[9,9],[10,10]]);


console.log('next prediction', closeToFiveAndOne);


// now we're cookin' with gas!
const forecast = net.forecast([[1,1],[2,2]], 6);
console.log('next 3 predictions', forecast);