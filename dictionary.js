Dictionary = new Meteor.Collection('dictionary');

if (Meteor.isServer) {
    Meteor.startup(function() {
        if (Dictionary.find().count() > 0) {
            return;
        }

        console.log('Initializing Dictionary');

        var dictionary = JSON.parse(Assets.getText('dictionary.json'));
        for (var word in dictionary) {
            if (dictionary.hasOwnProperty(word)) {
                Dictionary.insert({
                    word: word,
                    definition: dictionary[word]
                });
            }
        }

        console.log(Dictionary.find().count()+' entries added to Dictionary');
    });
}