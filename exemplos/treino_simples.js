const brain = require('brain.js');


const treino2 = new brain.NeuralNetwork();

treino2.train([
    // valores sao crescentes entre o v1 e v3
    // logo t = 1
    {
        input: { v1: 0.1, v2: 0.2, v3: 0.3}, 
        output: { t: 1 }
    },
    {
        input: { v1: 0.1, v2: 0.3, v3: 0.2}, 
        output: { t: 1 }
    },
    {
        input: { v1: 0.3, v2: 0.5, v3: 0.7}, 
        output: { t: 1 }
    },


    // valores sao descrescentes entre o v1 e v3
    // logo t = 0
    {
        input: { v1: 0.3, v2: 0.2, v3: 0.1}, 
        output: { t: 0 }
    },
    {
        input: { v1: 0.5, v2: 0.5, v3: 0.1}, 
        output: { t: 0 }
    },
    {
        input: { v1: 0.3, v2: 0.1, v3: 0.1 }, 
        output: { t: 0 }
    },
]);

// é crscente?
const output2 = treino2.run({ v1: 0.6, v2: 0.7, v: 0.8 });
console.log(output2);

// nao é crescente?
const output3 = treino2.run({ v1: 0.6, v2: 0.5, v: 0.1 });
console.log(output3);


