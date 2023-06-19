// HTML 문서 로드 완료 시 실행
document.addEventListener("DOMContentLoaded", function() {
    // 필요한 요소들을 참조
    const addButton = document.querySelector('.btn-added');
    const addedContainer = document.querySelector('.added');

    // 추가 버튼 클릭 시
    addButton.addEventListener('click', function() {
        // 새로운 div 요소 생성
        const newBan = document.createElement('div');
        newBan.className = "ban"; // 클래스 추가

        // 학반 번호를 포함하는 span 요소 생성
        const banBold = document.createElement('span');
        banBold.className = "ban-bold";
        const banBoldText = document.createTextNode('2-3');
        banBold.appendChild(banBoldText);

        // 학반 소개 텍스트를 포함하는 span 요소 생성
        const banText = document.createElement('span');
        const banTextContent = document.createTextNode('소프트웨어 공학과인 2학년 3반!');
        banText.appendChild(banTextContent);

        // 이미지 요소 생성 (예: 이미지 URL이 'image_url'인 경우)
        const image = document.createElement('img');
        image.src = 'image_url';
        image.alt = '2-3 반 사진';

        // div 요소에 span 및 img 요소 추가
        newBan.appendChild(banBold);
        newBan.appendChild(banText);
        newBan.appendChild(image);

        // 추가된 div를 addedContainer에 추가
        addedContainer.appendChild(newBan);
    });
});
