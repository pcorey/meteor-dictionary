Dictionary = new Meteor.Collection('dictionary');

if (Meteor.isServer) {
    Meteor.publish('dictionary', function(regex, options, sort, limit) {
        regex = regex || null;
        sort = sort   || {word: 1};
        limit = limit || 10;
        return Dictionary.find({
            word: {$regex: regex, $options: options}
        }, {
            limit: limit,
            sort: sort
        });
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

        Dictionary._ensureIndex({word: 'text'});

        console.log(Dictionary.find().count()+' entries added to Dictionary');
    });
}