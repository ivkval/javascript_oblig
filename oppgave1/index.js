// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";
// TODO: Gjør om text til array eks. ['Baby', 'cliche']
// TODO: Velg første ord så du har noe å sammenlikne med
// TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
const longestWord = () => {
    // Removes commas and periods from string. Source: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    const newText = text.replace(/[,.]/g, "");
    // Splits the string into an array with words
    const arrayOfWords = newText.split(" ");
    // The first word in the array as a base word, for having something to compare to
    let compare = arrayOfWords[0];
    // A foreach method that loops through all the elements in the array
    arrayOfWords.forEach(word => {
        // If statement that checks if the length of a word in the array is longer than the base word
        if (word.length > compare.length) {
            // if a word is longer than the base word, it becomes the new base word for comparison
            compare = word;
        }
    });
  return compare;
};
console.log(longestWord());