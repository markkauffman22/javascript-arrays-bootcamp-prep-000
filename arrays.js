var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
] ;

function addElementToBeginningOfArray(array, element) {
  return  [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}
  
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}  

function removeElementFromBeginningOfArray(array) {
 return array.slice(1);
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}

function 
/*//////////////////////////////
describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })

*////////////////////////