Dictionary = new Mongo.Collection('dictionary');
api.export('Dictionary');

if (Meteor.isServer) {
    Meteor.publish('dictionary', function(selector, options) {
        return Dictionary.find(selector, options);
    });

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

        try {
            Dictionary._ensureIndex({word: 'text'});
        }
        catch (error) {
            console.log('Unable to create index on Dictionary collection:',error.message);
        }

        console.log(Dictionary.find().count()+' entries added to Dictionary');
    });
}