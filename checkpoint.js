/* 
Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
Each time we take a new card we put it in the right place in our hand. 

Instructions
Each time work only with the first i-1 element from of the array
Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.
*/

function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let current = array[i]

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current
    }
    return array
}
console.log(insertion([6, 12, 1, 6, 3, 9, 12, 7]));