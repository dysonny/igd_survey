# IGD 챗봇 설문조사 시스템

인터넷 게임 중독(IGD) 설문조사를 위한 Flask 기반 웹 애플리케이션입니다.

## ✨ 주요 기능

- 📝 29문항 IGD 설문조사
- 🤖 GPT-4 기반 대화형 챗봇
- 🎤 음성인식 지원 (Web Speech API)
- 💾 자동 응답 저장 (JSON)

## 🚀 빠른 시작

### 1. 설치

```bash
pip install -r requirements.txt
```

### 2. 환경 변수 설정

`.env` 파일을 생성하고 다음 내용을 입력하세요:

```bash
OPENAI_API_KEY=your_openai_api_key_here
SECRET_KEY=your_secret_key_here
PORT=5000
```

### 3. 실행

```bash
chmod +x run.sh
./run.sh
```

브라우저에서 `http://localhost:5000`으로 접속하세요.

## 📁 프로젝트 구조

```text
.
├── main.py              # Flask 백엔드
├── index.html           # 프론트엔드
├── script.js            # JavaScript 로직
├── style.css            # 스타일
├── requirements.txt     # Python 의존성
└── userinfo/            # 응답 저장 폴더 (자동 생성)
```

## 🌐 API 엔드포인트

- `GET /` - 메인 페이지
- `POST /user-info` - 사용자 정보 저장
- `POST /chat` - 채팅 처리
- `POST /reset` - 설문 초기화
- `GET /history` - 대화 기록 조회

## � 데이터 저장

응답은 `userinfo/YYYY-MM-DD/이름_생년월일.json` 형식으로 저장됩니다.

## 🔒 보안 참고사항

- `.env` 파일은 절대 공개하지 마세요
- OpenAI API 키는 안전하게 관리하세요
- 프로덕션 환경에서는 `SECRET_KEY`를 변경하세요

## 📝 라이선스

이 프로젝트는 교육 및 연구 목적으로 제작되었습니다.
