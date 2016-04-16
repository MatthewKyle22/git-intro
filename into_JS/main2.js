var fullName = Namer(['matt', 'stevens'], nameJoiner){
    console.log(fullName);
});

function Namer (collection, callback) {
   return callback(collection);
}

function nameJoiner (arg) {
    return arg.join(' ');
}