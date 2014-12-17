Creates Dictionary collection populated with Webster\'s Unabridged English Dictionary.

JSON pulled from https://github.com/adambom/dictionary

Populates 'dictionary' collection in MongoDB with the contents of the dictionary.json in the format of:

{
    word: "<word>",
    definition: "<definition of word>"
}

And publishes the Dictionary meteor collection.