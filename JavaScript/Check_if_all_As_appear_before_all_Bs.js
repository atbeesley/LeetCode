/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) { 
    for(let i = 0; i < s.length; i++){
        if(s[i]==="b" && s[i+1]==="a"){
            return false
        }
    }
    return true
};