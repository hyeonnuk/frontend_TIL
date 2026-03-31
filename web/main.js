// DOM 조작
// 선택
// 조작
// 이벤트

const bannerEle = document.querySelector(".haeder_banner");
const headerELe = document.getElementById("header");
const menuItem = document.querySelectorAll(".header_menu > li");

const bannerCount = document.querySelector(".header_banner_count");

console.log(bannerEle)
console.log(headerELe)
console.log(menuItem)

// menuItem[0].innerText = "첫번째 LI 입니다."
// menuItem[0].innerHTML = "<a herf=''>첫번째 LI 입니다.</a>";
// menuItem[1].innerText = "두번째 LI 입니다."
// menuItem[2].innerText = "세번째 LI 입니다."

// 타이머 관련 함수
// setInterval(() => {}, interval); // interval(초)마다 반복 실행
// setTimeout(() => {}, timeout); // timeout(초) 이후에 실행

let count = 3;
const countFun = setInterval(() => {
    count--; // count = count -1;
    if(count <= 0){
        clearInterval(countFun);
        bannerEle.classList.add("hide");
    } else {
       bannerCount.innerText = count;
    }
}, 1000);

// setInterval(() => {
//     console.log("1초마다 실행");
// }, 1000);

// setTimeout(() => {
//     console.log("3초 뒤에 실행")
// }, 3000);