const firstSentences = [
    "Once upon a time in the enchanted land of code...",
    "In a galaxy far, far away from semicolons...",
    "Picture this: A programmer walks into a bar with a syntax error...",
    "It was a dark and stormy night in the console log...",
    "So, there I was, surrounded by curly braces and confusion...",
    "Coding life is like a box of chocolates, you never know what bug you're gonna get...",
    "There's a saying in JavaScript: 'Callback hell is just a vacation for your sanity'..."
];

const secondSentences = [
    "Little did they know, the variable 'unicorn' was about to enter the scene...",
    "Suddenly, the for loop started breakdancing uncontrollably...",
    "Out of nowhere, the function declared its love for a constant...",
    "The programmer sighed and said, 'I've got 99 problems, and they're all async...' ",
    "In the shadows, the array whispered, 'I've got pop, shift, and unshift secrets...' ",
    "The code looked at the bug and said, 'You're not welcome here, go bother Python'...",
    "They say laughter is the best medicine, but clearly, they haven't tried 'JSON.parse(null)'..."
];

const thirdSentences = [
    "And that's how NaN ended up leading the support group for rejected variables...",
    "The program concluded with a 'happily ever after' callback...",
    "As the credits rolled, the console.log declared, 'It's not a bug; it's a feature!'...",
    "In the end, the code realized that true love was a shallow clone away...",
    "And so, the developer lived happily ever after, with a pet snake named 'TypeError'...",
    "The moral of the story: Don't trust a function that says 'trust me, I'm pure'...",
    "And that, my friends, is why you never leave your code unattended in a room with a cat..."
];

// By taking three arrays, each containing 7 strings, as arguments - the function returns a random message as a string

const mixedMessageGenerator = (arr1, arr2, arr3) => {
    /* 
        1. Use three random number generators as index selectors from each array
        2. Store each randomly-selected element from each array into their respective variables
        3. Push those Elements into the new array
        4. Return the joined by ' ' array
    */ 

    let randomIndex1 = Math.floor(Math.random() * arr1.length);
    let randomIndex2 = Math.floor(Math.random() * arr2.length);
    let randomIndex3 = Math.floor(Math.random() * arr3.length);

    let newArr = [];

    let phraseOne = arr1[randomIndex1];
    let phraseTwo = arr2[randomIndex2];
    let phraseThree = arr3[randomIndex3];

    newArr.push(phraseOne, phraseTwo, phraseThree);
    return newArr.join(' ');
}

console.log(mixedMessageGenerator(firstSentences, secondSentences, thirdSentences));