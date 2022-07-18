const { Console } = require("console");
const url = require("url");
const { URL } = url; // 대문자 url 클래스 
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%83%88%EC%8B%B9&tqi=hWg%2F9wp0YiRssBrBRwossssstoC-146199"
const naver = new URL(string);

console.log(url.format(naver));
console.log(url.parse(string));

console.log(naver.searchParams);