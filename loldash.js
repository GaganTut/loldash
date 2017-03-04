// forEach is a function that takes in a 'collection' as its first parameter
// and an 'iteratee' as its second paramter. In Javascript, a collection can
// be an array or object.  Call iterator for each element of the collection. 
// The iteratee function takes in three parameters: value, key, collection
var forEach = function (collection, iteratee) {
  // your code here
  for (var i in collection) {
  	iteratee(collection[i], i, collection);
  }
};
// example execution: forEach([1,2,3], function(v, k, c) { console.log(v) })
// would output the following:
// 2
// 4
// 6


// Map returns an array of values by running each element in the collection through an iteratee. 
// Iterate has three parameters: value, key, collection
// Map is almost like forEach except it returns an array of values.
var map = function (collection, iteratee) {
  // your code here
  var mapArray = [];
  for (var i in collection) {
  	mapArray.push(iteratee(collection[i], i, collection));
  }
  return mapArray;
};
// example execution: map([1,2,3], function(v, k, c) {return v *2 })
// would return the following:
// [2,4,6]

// Filter iterates elements of a collection, returning an array of all elements 
// that the predicate returns truthy for.
// A predicate is a function that returns true or false.
// The predicate takes in three parameters: value, index, collection
var filter = function(collection, predicate) {
  // your code here
  var trueArray = [];
  for (var i in collection) {
  	if (predicate(collection[i], i, collection)){
      trueArray.push(collection[i]);
    }
  }
  return trueArray;
};
// example execution: filter([1,2,3,4], function(v,k,c) {return v % 2 === 0})
// would return the following:
// [2,4]


module.exports = {
  forEach: forEach,
  map: map,
  filter: filter
};
