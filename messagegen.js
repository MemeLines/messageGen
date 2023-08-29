// Animal Joke Generator

const animals = ["bear", "pig", "chimp", "dugong", "firefly", "buzzard"];
const verbs = ['eating', 'approaching', 'licking', 'fighting', 'threatening'];
const nouns = ["wife", "television", "grandpa", "children", "mouth"];

const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const generateRandomSentence = () => {
        const randomAnimal = getRandomElement(animals);
        const randomVerb = getRandomElement(verbs);
        const randomNoun = getRandomElement(nouns);
        return `That damn ${randomAnimal} is ${randomVerb} my precious ${randomNoun}.`; 
}
console.log(generateRandomSentence())

