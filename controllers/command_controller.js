import natural from 'natural';
const classifier = new natural.BayesClassifier();

classifier.addDocument('turn on the lights', 'lightsOn');
classifier.addDocument('turn off the lights', 'lightsOff');
classifier.addDocument('increase brightness', 'increaseBrightness');
classifier.addDocument('decrease brightness', 'decreaseBrightness');

classifier.train();

export default function command_controller(req, res) {
    res.send(classifier.classify(req.body.text));
}
