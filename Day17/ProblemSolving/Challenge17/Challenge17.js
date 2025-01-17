'use strict';

// 1) ---------------------
//
// Print a pattern using the recursion and 2 integers
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//
// ------------------------

const recursionPattern = (int1, int2) => {
    // write your code here
}

// 2) ---------------------
// 
// extract links from the HTML tags
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links could end with .com, .org or .net
// 
// ------------------------

const filterLinks = (str) => {
    // write your code here
}

// 3) ---------------------
// 
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//
// ------------------------

const isPalindrome = (str) => {
    // write your code here
}

// 4) ---------------------
// 
//  Write a function that accepts 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if the both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//
// ------------------------

const samePattern = (str, arr) => {
    // write your code here
}


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };