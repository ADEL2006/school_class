// HTML 문서 로드 완료 시 실행
document.addEventListener("DOMContentLoaded", function() {
    // 폼과 필요한 input 요소들을 참조
    const form = document.querySelector('.guest');
    const nameInput = document.querySelector('.name');
    const emailInput = document.querySelector('.email');
    const dateInput = document.querySelector('.date');
    const contentInput = document.querySelector('.content');

    // submit 이벤트 발생 시
    form.addEventListener('submit', function(event) {
        // 폼의 기본 submit 동작을 막음
        event.preventDefault();

        // 각 input 요소에서 값을 가져옴
        const name = nameInput.value;
        const email = emailInput.value;
        const date = dateInput.value;
        const content = contentInput.value;

        // alert 팝업 창에 보여줄 메시지를 구성
        const message = 
            `이름: ${name}\n` +
            `이메일: ${email}\n` +
            `방문일: ${date}\n` +
            `내용: ${content}`;

        // 메시지를 alert 팝업 창으로 보여줌
        alert(message);

        // 폼의 내용을 초기화
        form.reset();
    });
});
