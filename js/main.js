import {getPhotoCards} from './data.js';
import {generator} from './data.js';

getPhotoCards();
//generator.next();
const generatorNext = generator.next();

//const generateRandomObject = getPhotoCards();
//console.log(generateRandomObject);
console.log(generatorNext);
