document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector('.btn-added');
    const addedContainer = document.querySelector('.added');

    addButton.addEventListener('click', function () {
        if (addButton.value === "추가하기") {
            const newBan = document.createElement('div');
            newBan.className = "ban";
            newBan.id = "ban-2-3";

            const banBold = document.createElement('span');
            banBold.className = "ban-bold";
            const banBoldText = document.createTextNode('2-3');
            banBold.appendChild(banBoldText);

            const banText = document.createElement('span');
            const banTextContent = document.createTextNode('임베디드과인 2학년 3반! ');
            banText.appendChild(banTextContent);

            const image = document.createElement('img');
            image.src = '../img/2-3.png';
            image.alt = '2-3 반 사진';
            image.className = 'ban-img';

            const link = document.createElement('a');
            link.href = '../img/2-3-schedule.png';
            link.appendChild(image);

            const scheduleText = document.createElement('span');
            const scheduleTextContent = document.createTextNode(' <-- 시간표를 보려면 클릭!');
            scheduleText.appendChild(scheduleTextContent);

            newBan.appendChild(banBold);
            newBan.appendChild(banText);
            newBan.appendChild(link);
            newBan.appendChild(scheduleText);

            addedContainer.appendChild(newBan);

            addButton.value = "삭제하기";
        } else if (addButton.value === "삭제하기") {
            const banToRemove = document.getElementById('ban-2-3');
            addedContainer.removeChild(banToRemove);

            addButton.value = "추가하기";
        }
    });
});
