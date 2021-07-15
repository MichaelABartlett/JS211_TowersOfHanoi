'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

        // each stack is an array
        // each move will remove from startStack using .pop() on end and add to the end of endStack using .push()
        // 
let stacks = {
  a: [4, 3, 2],
  b: [],
  c: [1]
};

// Start here. What is this function doing?
//
  //this function is printing out each stack
  // this way you can watch the game
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
//
// each move will remove from startStack using .pop() on end and add to the end of endStack using .push()
/**
 * This function should honor moving the pieces
 * @param {*} startStack 
 * @param {*} endStack 
 */

const movePiece = (startStack, endStack) => {
  // Your code here

}

// **************************************************************************************************************

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
//
/**
 * Return true, if the move is legal, 
 * This function does not actually make the move, it just checks if it is legal or not
 * @param {*} startStack 
 * @param {*} endStack 
 */
// this should run before movePiece()
// you will have to check that the item being selected is 'a' 'b' or 'c'
// then check to make sure there is a item in that array to be removed
// then check to make sure that the startStack is not the same as endStack
// then check to make sure the element being moved is smaller than the one it is being moved on top of

// let startString = stacks[startStack].join("");
// let endString = stacks[endStack].join("");


const isLegal = (startStack, endStack) => {
  console.log('the entered startStack is: ', startStack);
  console.log('the entered endStack is: ', endStack);
  
  

  // start with checking to see if 'a' 'b' or 'c' was entered
  if((startStack != "a" && startStack != "b" && startStack != "c" ) || (endStack != "a" && endStack != "b" && endStack != "c" )){
    console.log("You have not entered 'a' 'b' or 'c', please try again");
    console.log("Note that the selection must be made in lower case");
    return;
  } else if (stacks[startStack].join("") === ""){
    console.log("You have selected a empty stack for startStak");
    console.log("You must pick a stack with someting in it, please try again")
    return;
  } else if (startStack === endStack){
    console.log("You can not pick the same stack for startStack and endStack");
    console.log("Please try again picking different stacks for startStack and endStack");
    return;
   } 

}

// ******************************************************************************************************

// What is a win in Towers of Hanoi? When should this function run?
/**
 * This function should return true, if the board is in a willing state
 * winning state means: all the pieces are in 1 stack. 
 * so b or c stack are equal to [4,3,2,1]
 */
// make sure one array has all 4 elements and that the order is correct
const checkForWin = () => {
  // Your code here

}

// **********************************************************************************************************

// When is this function called? What should it do with its argument?
//
/**
 * 
 * @param {*} startStack 
 * @param {*} endStack 
 */
// this function is called in the getPrompt()
// all functions are called in this function
// the arguments should be passed into variables to be used later
const towersOfHanoi = (startStack, endStack) => {
  // first we need to check to make sure the values put into startStack and endStack are legal moves
  // if it is legal we can move to the next function call below isLegal()
  // if it is not legal we need to print out a error message to let the user know the move was not legal  
  isLegal(startStack, endStack)
    // if not legal print a error message
    //if legal make move
    // check for win
    // if they win say congradulations
    // you do not need to do anything if they do not win, the code is set up to keep running
  // Your code here

}

/**
 * scoring
 * 20: code plan or detailed enough comments that I am convenced that you understand what you are coding
 * 20: if your code actuall makes the move
 * 20: if your code correctly captures illegal moves
 * 20: if your code correctly captures a win condition
 * 20: putting it all together, (the towersOfHanoi function)
 */



const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
