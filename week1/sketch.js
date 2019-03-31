let video;
let classifier;

function setup() {
  createCanvas(300, 300);

  video = createCapture(VIDEO);

  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
}

function modelReady() {
  console.log('our model is ready!!!');
  classifier.predict(gotResult);
}

function gotResult(err, results) {
  if (results) {
    console.log('results: ', results);
    select('#result').html(results[0].className);
    select('#probability').html(results[0].probability);
    classifier.predict(gotResult);
    if (results[0].className === 'Granny Smith') {
      background(255, 0, 0);
    } else {
      background(0, 255, 0);
    }
  }
}
