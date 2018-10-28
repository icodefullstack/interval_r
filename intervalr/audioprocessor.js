let fs = require('fs');
let wav = require('node-wav');

fs.readdir('./wavs', function(err, items) {
    console.log(items);
});

let stop = fs.readFileSync('./wavs/stop.wav');
let rest = fs.readFileSync('./wavs/rest.wav');
let decodedStop = wav.decode(stop);
let decodedRest = wav.decode(rest);

let arr1 = decodedStop.channelData.concat(decodedRest.channelData);
let arr2 = [...decodedRest.channelData[0], ...decodedStop.channelData[0]];
decodedStop.channelData[0]=arr2;

let customerFile1 = wav.encode(arr1, { sampleRate: decodedStop.sampleRate, float: true, bitDepth: 32 });
let customerFile2 = wav.encode(decodedStop.channelData, { sampleRate: decodedStop.sampleRate, float: true, bitDepth: 32 });

fs.writeFile('./customerFiles/result1.wav', customerFile1, (err)=>{console.log(err);})
fs.writeFile('./customerFiles/result2.wav', customerFile2, (err)=>{console.log(err);})
