/**
 * Stretch challenge incomplete
 * If you have extra time, you can try to make your wordSearch function extra smart by having it look backwards and diagonally. 
 * Remember to follow TDD practices by first writing some test cases and then writing the code in your function.
 */

const transpose = matrix => {
    // Create an empty array for the result.
    let result = [];
    // Get the number of columns from the first row of the matrix.
    let numOfColumns = matrix[0].length;
    // Loop through each column.
    for (let col = 0; col < numOfColumns; col++) {
        // Create an empty row for the current column.
        let newRow = [];
        // Loop through each row of the matrix and get the element at the current column.
        for (let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        }
        // Add the new row to the result.
        result.push(newRow);
    }
    return result; 
}

// Function to search for a word within a matrix (both horizontally and vertically)
const wordSearch = (letters, word) => {
    // Check for empty matrix or invalid matrix structure
    if (letters.length === 0 || !Array.isArray(letters[0])) return false;
    // Convert each row in the matrix to a string
    const horizontalJoin = letters.map(ls => ls.join(''));    
    // Check each row string for the presence of the word
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    // Transpose the matrix to easily check vertically
    const transposed = transpose(letters);
    const verticalJoin = transposed.map(ls => ls.join(''));
    // Check each transposed row string (i.e., original column) for the presence of the word
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    // Return false if the word is not found both horizontally and vertically
    return false;
};

module.exports = wordSearch
