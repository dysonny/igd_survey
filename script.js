const userInfoForm = document.getElementById('user-info-form');
const userInfoContainer = document.getElementById('user-info-container');
const chatContainer = document.getElementById('chat-container');
const chatOutput = document.getElementById('chat-output');
const responseButtons = document.getElementById('response-buttons');
const textInputForm = document.getElementById('text-input-form');
const textInput = document.getElementById('text-input');
const voiceButton = document.getElementById('voice-button');

// 사용자 정보 저장 변수
let userInfo = {};

// 음성인식 변수
let recognition = null;
let isRecording = false;

// Web Speech API 지원 확인 및 초기화
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'ko-KR'; // 한국어 설정
    recognition.continuous = false; // 한 번만 인식
    recognition.interimResults = false; // 최종 결과만 사용

    // 음성인식 결과 처리
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        textInput.value = transcript;
        isRecording = false;
        voiceButton.textContent = '🎤';
        voiceButton.classList.remove('recording');
    };

    // 음성인식 종료 처리
    recognition.onend = () => {
        isRecording = false;
        voiceButton.textContent = '🎤';
        voiceButton.classList.remove('recording');
    };

    // 음성인식 에러 처리
    recognition.onerror = (event) => {
        console.error('음성인식 오류:', event.error);
        isRecording = false;
        voiceButton.textContent = '🎤';
        voiceButton.classList.remove('recording');
        
        if (event.error === 'no-speech') {
            alert('음성이 감지되지 않았습니다. 다시 시도해주세요.');
        } else if (event.error === 'not-allowed') {
            alert('마이크 권한이 필요합니다. 브라우저 설정에서 마이크 권한을 허용해주세요.');
        }
    };
}

// 스크롤을 맨 아래로 이동하는 함수
function scrollToBottom() {
    chatOutput.scrollTop = chatOutput.scrollHeight;
}



// 페이지 로드 시 초기화
window.onload = async () => {
    try {
        // 설문 상태 초기화 요청
        await fetch('/reset', { method: 'POST' });
        console.log('설문 상태가 초기화되었습니다.');
    } catch (err) {
        console.error('설문 초기화 중 오류:', err);
    }

    userInfoContainer.style.display = 'block';
    chatContainer.style.display = 'none';
};

// userInfoForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     // 사용자 정보 저장
//     userInfo = {
//         name: document.getElementById('name').value,
//         dob: document.getElementById('dob').value,
//         gender: document.getElementById('gender').value,
//     };

//     // 서버에 사용자 정보 전송
//     try {
//         await fetch('/user-info', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(userInfo)
//         });
//     } catch (err) {
//         console.error('Error saving user info:', err);
//     }

//     // 사용자 정보 입력 화면 숨기기
//     userInfoContainer.style.display = 'none';

//     // 채팅 화면 보이기
//     chatContainer.style.display = 'block';

//     // 환영 메시지 출력
//     const welcomeMessage = document.createElement('div');
//     welcomeMessage.className = 'bot-message';
//     welcomeMessage.textContent = `안녕하세요, ${userInfo.name}님! 설문조사를 시작하겠습니다.`;
//     chatOutput.appendChild(welcomeMessage);

//     // 추가 설명 메시지 출력
//     const explanationMessage = document.createElement('div');
//     explanationMessage.className = 'bot-message';
//     explanationMessage.textContent = `다음은 지난 1년 동안(즉, 지난 12개월 동안)의 당신의 게임 활동과 관련한 질문입니다. 여기에서 말하는 게임 활동이란, 컴퓨터, 노트북, 게임 콘솔(예를 들어, 플레이스테이션 등의 게임 기기)뿐만 아니라, 기타 온라인/오프라인 기기(예를 들어, 스마트폰, 태블릿 등)를 통해 즐겼던 게임과 관련한 모든 활동을 포함합니다. 
// 각 문항을 읽고 자신과 가장 일치한다고 생각되는 정도의 번호를 입력해주세요.`;
//     chatOutput.appendChild(explanationMessage);

//     // 스크롤 아래로 이동
//     scrollToBottom();

//     // 첫 번째 질문 요청
//     requestQuestion();
// });

userInfoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 사용자 정보 저장
    const gameAddictionScore = document.querySelector('input[name="game-addiction-score"]:checked'); // 추가된 부분

    // 게임중독 평가 점수가 선택되지 않은 경우 경고 메시지
    if (!gameAddictionScore) { // 추가된 부분
        alert('게임중독 척도를 선택해주세요.'); // 추가된 부분
        return; // 추가된 부분
    }

    userInfo = {
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        gameAddictionScore: gameAddictionScore.value // 게임중독 평가 점수 추가
    };

    // 서버에 사용자 정보 전송
    try {
        await fetch('/user-info', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        });
    } catch (err) {
        console.error('Error saving user info:', err);
    }

    // 사용자 정보 입력 화면 숨기기
    userInfoContainer.style.display = 'none';

    // 채팅 화면 보이기
    chatContainer.style.display = 'block';

    // 환영 메시지 출력
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'bot-message';
    welcomeMessage.textContent = `안녕하세요, ${userInfo.name}님! 설문조사를 시작하겠습니다.`;
    chatOutput.appendChild(welcomeMessage);

    // 추가 설명 메시지 출력
    const explanationMessage = document.createElement('div');
    explanationMessage.className = 'bot-message';
    explanationMessage.textContent = `다음은 지난 1년 동안(즉, 지난 12개월 동안)의 당신의 게임 활동과 관련한 질문입니다. 여기에서 말하는 게임 활동이란, 컴퓨터, 노트북, 게임 콘솔(예를 들어, 플레이스테이션 등의 게임 기기)뿐만 아니라, 기타 온라인/오프라인 기기(예를 들어, 스마트폰, 태블릿 등)를 통해 즐겼던 게임과 관련한 모든 활동을 포함합니다. 
각 문항을 읽고 자신과 가장 일치한다고 생각되는 정도의 번호를 입력해주세요.`;
    chatOutput.appendChild(explanationMessage);

    // 스크롤 아래로 이동
    scrollToBottom();

    // 첫 번째 질문 요청
    requestQuestion();
});


async function requestQuestion(userInput = "") {
    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_input: userInput })
        });
        const data = await response.json();
        console.log("서버 응답:", data); // 디버깅 로그

        if (data.question) {
            // 질문 메시지 추가
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = data.question;
            chatOutput.appendChild(botMessage);

            // 버튼 텍스트 변경
            if (data.button_texts && data.button_texts.length > 0) {
                const buttons = document.querySelectorAll('.response-button');
                data.button_texts.forEach((text, index) => {
                    if (buttons[index]) {
                        buttons[index].textContent = text;
                    }
                });
            }

            // 추가 안내 메시지 추가
            if (data.additional_message) {
                const additionalMessage = document.createElement('div');
                additionalMessage.className = 'bot-message';
                additionalMessage.textContent = data.additional_message;
                chatOutput.appendChild(additionalMessage);
            }

            // 스크롤 아래로 이동
            scrollToBottom();
        }
    } catch (err) {
        console.error('Error requesting question:', err);
    }
}


// 응답 버튼 클릭 처리
responseButtons.addEventListener('click', (e) => {
    if (e.target.classList.contains('response-button')) {
        const userInput = e.target.getAttribute('data-value');

        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = userInput;
        chatOutput.appendChild(userMessage);

        scrollToBottom();

        requestQuestion(userInput);
    }
});

// 텍스트 입력 처리
textInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = textInput.value.trim();

    if (userInput) {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = userInput;
        chatOutput.appendChild(userMessage);

        scrollToBottom();

        requestQuestion(userInput);
        textInput.value = ''; // 추가된 부분
    }
});

// 음성인식 버튼 클릭 처리
if (voiceButton && recognition) {
    voiceButton.addEventListener('click', () => {
        if (isRecording) {
            // 녹음 중이면 중지
            recognition.stop();
            isRecording = false;
            voiceButton.textContent = '🎤';
            voiceButton.classList.remove('recording');
        } else {
            // 녹음 시작
            try {
                recognition.start();
                isRecording = true;
                voiceButton.textContent = '🔴';
                voiceButton.classList.add('recording');
            } catch (error) {
                console.error('음성인식 시작 오류:', error);
                alert('음성인식을 시작할 수 없습니다. 잠시 후 다시 시도해주세요.');
            }
        }
    });
} else if (voiceButton && !recognition) {
    // 음성인식을 지원하지 않는 브라우저
    voiceButton.style.display = 'none';
}
