// typeof: Array
// JS's arrays are like python arrays
// let even = [2,4,6,8]
// console.log(even)

// let odd = new Array(1,3,7,9) // it is  not strict dtype: can change its elements or even their dtype
// console.log(odd)

// // odd[1] = 'Ali'
// // console.log(odd)

// //                    ************Arrays Methods*******************

// const fruits = ['Apple','Kiwi']
//  //      declared as const but still array is modifiable ????????
// // The array lives in memory, and fruits is just pointing to it.
// //const means: “you can’t point this name 'fruit' to 
// //a new array — but you can change the existing array or its content, it points to.

// //1.
// fruits.push('Orange') // add element at end

// //2. 
// fruits.pop() // remove element from end

// //3.
// // unshift:    Inserts new elements at the start of
// //             an array, and returns the new length of the array

// console.log(fruits.unshift('Avacado')) 



// // 4.
// // removes the first ele & returns array itself // if empty arr => return undefined

// fruits.shift() 
// console.log(fruits)

// //5. 
// console.log(fruits.indexOf('Kiwi'))

// //6.
// console.log(fruits.includes('Kiwi'))

// //7. 
// // join: convert array => string using given seperator

// let arr_str = fruits.join(' $ ')
// console.log(arr_str)

//8.
// slice array like cuting a peice of cake but magically orginal cake do not have any cut 
// this slice() has same properties as in strings

let basket = ['Ball','Cube','Pen','Thread']

console.log(basket.slice(0,2))

console.log(basket)

console.log(basket.slice(2))

console.log(basket.slice(-2)) // last two

// console.log(basket.slice(-1,-2)) // outputs []: empty arr bcz slice always go from left to right
//                               // if strt & end are given, here start = 3 , end = 2 (it can'y move)
//                               // right to left so gives Empty array



//  combining Arrays

let dry_ingredients = [ 'Flour','Baking Soda']

let wet_ingrediennts = ['Butter','Egg','Vanila Essence']

// let cake = dry_ingredients.push(wet_ingrediennts) ❌ 

// as JavaScript arrays can take in any dtype, So pushing arr (wet_ingredient)
// will push whole array as an elemnt of arry dry_ingredient

// Correct ways to merging arrays ✅

//1.
//let cake = dry_ingredients.concat(wet_ingrediennts) // concat merges two arrays as single array 

//2. Want to merge more than 2 arrays: Use Spread method 

let toping = [['Whipping Cream','Chocoalate'],['Cherry','choco chips']]
let topings =  toping.flat()
console.log(topings)

// check is dtype of variable 
console.log(Array.isArray(toping)) // method of array

// Bulit-in method 'Array.from(iterable)' to make arrays from a iterable 
let s = new String('helloo')
let s_arr = Array.from(s)
console.log(typeof s_arr)

// make array of given values : Use "Array.of(given value1,value2)"
let n1 = 10
let n2 = 100
let n3 = 111

let nums = Array.of(n1,n2,n3)
console.log(nums)







