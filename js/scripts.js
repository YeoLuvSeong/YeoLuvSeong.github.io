/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

// 링크 복사
function copyLink() {
    var url = 'https://yeoluvseong.github.io/';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크가 복사되었습니다. 널리널리 퍼뜨려주세요💕")
}

// 신부 계좌번호 복사
function brideAccountNumber() {
    var bride_account = '96300558602010 기업은행';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = bride_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("신부의 계좌번호가 복사되었습니다.\n963-005586-02-010 기업은행 성은숙")
}

// 신랑 계좌번호 복사
function groomAccountNumber() {
    var groom_account = '110316095615 신한은행';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = groom_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("신랑의 계좌번호가 복사되었습니다.\n110-316-095615 신한은행 여창모")
}

// 아버지 계좌번호 복사 
function groomsFatherAccountNumber() {
    var grooms_father_account = '94712205013 농협';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = grooms_father_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("계좌번호가 복사되었습니다.\n947-12-205013 농협 여태훈")
}

// 어머니 계좌번호 복사 
function groomsMatherAccountNumber() {
    var grooms_father_account = '94712205013 농협';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = grooms_father_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("계좌번호가 복사되었습니다.\n947-12-205013 농협 여태훈")
}

// 장모님 계좌번호 복사 
function bridesMatherAccountNumber() {
    var grooms_father_account = '82108452229898 농협';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = grooms_father_account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("계좌번호가 복사되었습니다.\n821084-52-229898 농협 윤방임")
}


// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('YOUR APP KEY');
    // SDK 초기화 여부를 판단합니다.
    Kakao.isInitialized();
    //console.log(Kakao.isInitialized());
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '창모🤍은숙 결혼합니다.',
            description: '2025.08.23\n오후 3시 00분 KDW웨딩 마이더스홀',
            imageUrl: 'https://google.com',
            link: {
                mobileWebUrl: 'https://yeoluvseong.github.io/',
                webUrl: 'https://yeoluvseong.github.io/',
            },
        },
        buttons: [
            {
                title: '모바일 청첩장 보기',
                link: {
                    mobileWebUrl: 'https://yeoluvseong.github.io/',
                    webUrl: 'https://yeoluvseong.github.io/',
                },
            },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}

function toggleFoldable() {
    var content = document.querySelector('.foldable-content');
    var toggleIcon = document.getElementById('toggleIcon');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable2() {
    var content = document.querySelector('.foldable-content2');
    var toggleIcon = document.getElementById('toggleIcon2');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable3() {
    var content = document.querySelector('.foldable-content3');
    var toggleIcon = document.getElementById('toggleIcon3');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

//for gallery
const slider = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

let currentSlide = 1; // 첫 번째 진짜 슬라이드

function updateSlide(animated = true) {
    const width = slider.offsetWidth;

    if (!animated) {
        slidesContainer.style.transition = "none";
    } else {
        slidesContainer.style.transition = "transform 0.4s ease-in-out";
    }

    slidesContainer.style.transform = `translateX(-${currentSlide * width}px)`;

    //  현재 이미지에 맞춰 슬라이더 높이 자동 조절
    const currentImage = slides[currentSlide];
    currentImage.onload = () => {
        slider.style.height = currentImage.offsetHeight + "px";
    };

    // 혹시 로딩이 이미 끝났다면 강제 트리거
    if (currentImage.complete) {
        slider.style.height = currentImage.offsetHeight + "px";
    }
}

function moveSlide(step) {
    currentSlide += step;
    updateSlide();

    slidesContainer.addEventListener("transitionend", () => {
        if (currentSlide === 0) {
            currentSlide = totalSlides - 2;
            updateSlide(false);
        } else if (currentSlide === totalSlides - 1) {
            currentSlide = 1;
            updateSlide(false);
        }
    }, { once: true });
}

window.addEventListener("load", () => updateSlide(false));
window.addEventListener("resize", () => updateSlide(false));
