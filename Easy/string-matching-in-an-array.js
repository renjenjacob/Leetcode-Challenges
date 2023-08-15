//Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.
//A substring is a contiguous sequence of characters within a string.

//Examples

//Input: words = ["mass","as","hero","superhero"]
//Output: ["as","hero"]
//Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
//["hero","as"] is also a valid answer.

//Input: words = ["leetcode","et","code"]
//Output: ["et","code"]
//Explanation: "et", "code" are substring of "leetcode".

//Input: words = ["blue","green","bu"]
//Output: []
//Explanation: No string of words is substring of another string.

//Constraints:
//1 <= words.length <= 100
//1 <= words[i].length <= 30
//words[i] contains only lowercase English letters.
//All the strings of words are unique.

//Solution

var stringMatching = function(words) {
    let output = [];
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].indexOf(words[i]) !== -1) {
                output.push(words[i]);
                break;
            }
        }
    }
    
    return output;
}

