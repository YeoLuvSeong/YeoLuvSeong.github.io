
function copyAccountNumber(account, message) {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = account;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert(message);
}

// 계좌번호 복사 함수
function brideAccountNumber() {
    copyAccountNumber('96300558602010 기업은행', '신부의 계좌번호가 복사되었습니다.\n963-005586-02-010 기업은행 성은숙');
}
function groomAccountNumber() {
    copyAccountNumber('110316095615 신한은행', '신랑의 계좌번호가 복사되었습니다.\n110-316-095615 신한은행 여창모');
}
function groomsFatherAccountNumber() {
    copyAccountNumber('94712205013 농협', '계좌번호가 복사되었습니다.\n947-12-205013 농협 여태훈');
}
function groomsMatherAccountNumber() {
    copyAccountNumber('3333341729782 카카오뱅크', '계좌번호가 복사되었습니다.\n3333-34-1729782 카카오뱅크 이영자');
}
function bridesMatherAccountNumber() {
    copyAccountNumber('82108452229898 농협', '계좌번호가 복사되었습니다.\n821084-52-229898 농협 윤방임');
}
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
    alert("링크가 복사되었습니다.\n널리널리 퍼뜨려주세요💕")
}

// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('9196c36819c3355272de20095112d36d');
    // SDK 초기화 여부를 판단합니다.
    Kakao.isInitialized();
    //console.log(Kakao.isInitialized());
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '창모🤍은숙 결혼합니다.',
            description: '2025.08.23.\n오후 3시 KDW웨딩 마이더스홀',
            imageUrl: 'https://yeoluvseong.github.io/assets/img/main/ogimage.jpg',
            link: {
                mobileWebUrl: 'https://yeoluvseong.github.io/#!',
                webUrl: 'https://yeoluvseong.github.io/#!',
            },
        },
        buttons: [
            {
                title: '모바일 청첩장 보기',
                link: {
                    mobileWebUrl: 'https://yeoluvseong.github.io/#!',
                    webUrl: 'https://yeoluvseong.github.io/#!',
                },
            },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}
function toggleFoldableByClass(contentClass, iconId) {
    const content = document.querySelector("." + contentClass);
    const toggleIcon = document.getElementById(iconId);

    if (content && toggleIcon) {
        const isHidden = content.style.display === "none" || content.style.display === "";
        content.style.display = isHidden ? "block" : "none";
        toggleIcon.innerText = isHidden ? "▲" : "▼";
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
