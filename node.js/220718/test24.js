const url = require("url");
const { URL } = url; // 대문자 url 클래스 
const string = "sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";
const naver = new URLSearchParams(string);

console.log(naver.keys());
console.log(naver.values());
naver.delete('sm');
console.log(naver.keys());