# IGD 챗봇 설문조사 시스템

인터넷 게임 중독(Internet Gaming Disorder) 설문조사를 위한 Flask 기반 웹 애플리케이션입니다.

## ✨ 주요 기능

- 📝 29문항 IGD 설문조사
- 🤖 GPT-4 기반 대화형 챗봇
- 🎤 음성인식 지원 (Web Speech API)
- 💾 JSON 파일 기반 응답 저장
- 📊 실시간 대화 기록

## 🚀 빠른 시작

### 1. 필수 요구사항

- Python 3.9+
- OpenAI API 키

### 2. 설치

```bash
# 저장소 클론
git clone <repository-url>
cd <repository-name>

# 패키지 설치
pip install -r requirements.txt
```

### 3. 환경 변수 설정

```bash
# .env 파일 생성
cp .env.example .env

# .env 파일을 편집하여 OpenAI API 키 입력
nano .env
```

`.env` 파일 내용:

```bash
OPENAI_API_KEY=your_openai_api_key_here
SECRET_KEY=your_secret_key_here
PORT=5001
```

### 4. 실행

**자동 실행 (권장):**

```bash
chmod +x run.sh
./run.sh
```

**수동 실행:**

```bash
python main.py
```

서버가 시작되면 브라우저에서 `http://localhost:5001`로 접속하세요.

## 📁 프로젝트 구조

```text
.
├── main.py              # Flask 백엔드 서버
├── index.html           # 메인 프론트엔드
├── script.js            # JavaScript 로직
├── style.css            # 스타일시트
├── requirements.txt     # Python 의존성
├── runtime.txt          # Python 버전 명세
├── Procfile            # 배포 설정
├── run.sh              # 실행 스크립트
├── .env.example        # 환경 변수 예시
├── .gitignore          # Git 제외 파일
└── userinfo/           # 설문 응답 저장 폴더 (자동 생성)
```

## 🎯 사용 방법

1. 웹 페이지 접속
2. 사용자 정보 입력 (이름, 생년월일, 성별)
3. 29개 설문 문항에 응답
4. 챗봇과 대화를 통해 추가 질문 및 상담
5. 응답은 자동으로 `userinfo/[날짜]/[이름]_[생년월일].json` 형식으로 저장됨

## 🌐 API 엔드포인트

- `GET /` - 메인 페이지
- `POST /user-info` - 사용자 정보 저장
- `POST /chat` - 질문/응답 처리
- `POST /reset` - 설문 초기화
- `GET /history` - 대화 기록 조회

## 🔒 보안 참고사항

- `.env` 파일은 절대 공개 저장소에 커밋하지 마세요
- OpenAI API 키는 안전하게 관리하세요
- 프로덕션 환경에서는 `SECRET_KEY`를 반드시 변경하세요

## 🎤 음성인식

- Web Speech API 사용
- HTTPS 필수 (로컬 개발 시 localhost는 예외)
- 한국어 지원
- Chrome, Edge 권장

## 📝 라이선스

이 프로젝트는 교육 및 연구 목적으로 제작되었습니다.

## 🤝 기여

이슈 제보 및 풀 리퀘스트는 언제나 환영합니다!- ✅ 자동 재시작./run.sh



서버가 시작되면 브라우저에서 `http://localhost:5000`으로 접속하세요.```



## 📁 프로젝트 구조**배포 방법:** `RAILWAY_QUICKSTART.md` 참고



```### 3. 접속 방법

.

├── main.py              # Flask 백엔드 서버**상세 가이드:** `RAILWAY_DEPLOY.md` 참고

├── index.html           # 메인 프론트엔드

├── script.js            # JavaScript 로직서버 실행 후 표시되는 IP 주소로 접속하세요.

├── style.css            # 스타일시트

├── requirements.txt     # Python 의존성---

├── runtime.txt          # Python 버전 명세

├── Procfile            # 배포 설정**로컬 접속:**

├── run.sh              # 실행 스크립트

└── userinfo/           # 설문 응답 저장 폴더## 💻 로컬 개발- http://localhost:5000

```



## 🎯 사용 방법

### 필수 요구사항**외부 접속:** (다른 컴퓨터에서)

1. 웹 페이지 접속

2. 사용자 정보 입력 (이름, 생년월일, 성별)- http://[서버IP주소]:5000

3. 29개 설문 문항에 응답

4. 챗봇과 대화를 통해 추가 질문 및 상담- Python 3.9+- 예: http://192.168.1.100:5000

5. 응답은 자동으로 `userinfo/` 폴더에 저장됨

- OpenAI API 키

## 📊 데이터 저장

> 💡 서버 IP 주소는 `./run.sh` 실행 시 자동으로 표시됩니다.

설문 응답은 다음 형식으로 저장됩니다:

### 설치 및 실행

```

userinfo/## 📋 수동 설치 및 실행

  └── YYYY-MM-DD/

      └── 이름_생년월일.json```bash

```

# 1. 저장소 클론 또는 다운로드### 필수 요구사항

## 🔒 보안 참고사항

cd /path/to/project

- `.env` 파일은 절대 공개 저장소에 커밋하지 마세요

- OpenAI API 키는 안전하게 관리하세요- Python 3.7 이상

- 프로덕션 환경에서는 `SECRET_KEY`를 반드시 변경하세요

# 2. 패키지 설치- pip

## 📝 라이선스

pip install -r requirements.txt

이 프로젝트는 교육 및 연구 목적으로 제작되었습니다.

### 설치

## 🤝 기여

# 3. 환경 변수 설정

이슈 제보 및 풀 리퀘스트는 언제나 환영합니다!

cp .env.example .env```bash

# .env 파일을 열어 OPENAI_API_KEY 설정# 1. Python 가상환경 생성 (선택사항이지만 권장)

python3 -m venv venv

# 4. 서버 실행source venv/bin/activate  # Linux/Mac

python3 main.py

# 2. 필요한 패키지 설치

# 5. 브라우저에서 접속pip install -r requirements.txt

# http://localhost:5001

```# 3. 환경 변수 설정

cp .env.example .env

---# .env 파일을 열어 OPENAI_API_KEY 값을 실제 키로 변경



## 📁 프로젝트 구조# 4. userinfo 디렉토리 생성 (자동으로 생성되지만, 미리 만들어도 됨)

mkdir -p userinfo

``````

.

├── main.py                   # Flask 애플리케이션### 실행

├── index.html                # 메인 HTML

├── script.js                 # Frontend JavaScript (음성인식 포함)```bash

├── style.css                 # 스타일시트# 개발 모드로 실행

├── requirements.txt          # Python 의존성python3 main.py

├── Procfile                  # Railway 실행 명령

├── runtime.txt               # Python 버전# 또는 프로덕션 모드로 실행 (더 안정적)

├── .env.example              # 환경 변수 예시gunicorn --bind 0.0.0.0:5000 --workers 2 --timeout 120 main:app

├── .gitignore                # Git 제외 파일```

├── RAILWAY_DEPLOY.md         # Railway 배포 가이드

├── RAILWAY_QUICKSTART.md     # 빠른 시작## 🔧 포트 변경

├── README.md                 # 이 문서

└── userinfo/                 # 사용자 응답 저장 (자동 생성)기본 포트는 5000입니다. 변경하려면:

```

1. `.env` 파일에서 `PORT=원하는포트번호` 설정

---2. 또는 `main.py` 마지막 줄 수정



## 🌐 API 엔드포인트## 🌐 외부 접속 설정



배포 후 Frontend 개발자에게 다음 정보를 전달하세요:### 방화벽 설정 (필요시)



**Base URL:** `https://your-app.up.railway.app````bash

# Ubuntu/Debian

### 사용 가능한 APIsudo ufw allow 5000/tcp



- `GET /` - 메인 페이지# CentOS/RHEL

- `POST /user-info` - 사용자 정보 저장sudo firewall-cmd --permanent --add-port=5000/tcp

- `POST /chat` - 질문/응답sudo firewall-cmd --reload

- `POST /reset` - 설문 초기화```

- `GET /history` - 대화 기록 조회

### 서버 IP 확인

### 예시

```bash

```javascript# Linux

// 사용자 정보 저장hostname -I

fetch('https://your-app.up.railway.app/user-info', {

    method: 'POST',# 또는

    headers: { 'Content-Type': 'application/json' },ip addr show

    body: JSON.stringify({```

        name: '홍길동',

        dob: '1990-01-01',## 📁 프로젝트 구조

        gender: 'male',

        gameAddictionScore: '5'```

    }).

});├── main.py              # Flask 애플리케이션 메인 파일

├── index.html           # 메인 HTML 페이지

// 채팅├── script.js            # 프론트엔드 JavaScript

fetch('https://your-app.up.railway.app/chat', {├── style.css            # 스타일시트

    method: 'POST',├── requirements.txt     # Python 의존성 패키지

    headers: { 'Content-Type': 'application/json' },├── .env                 # 환경 변수 (생성 필요)

    body: JSON.stringify({ user_input: '3' })├── .env.example         # 환경 변수 예시

});├── run.sh              # 실행 스크립트

```├── README.md           # 이 문서

└── userinfo/           # 사용자 응답 저장 폴더 (자동 생성)

---```



## 🔒 환경 변수## 💾 데이터 저장



### 로컬 개발사용자의 설문 응답은 `userinfo/[날짜]/[이름]_[생년월일].json` 형식으로 저장됩니다.



`.env` 파일:## ⚠️ 주의사항

```

OPENAI_API_KEY=sk-proj-...1. **OpenAI API 키**: 반드시 `.env` 파일에 유효한 OpenAI API 키를 설정해야 합니다.

PORT=50012. **방화벽**: 외부 접속을 위해 포트 5000을 열어야 할 수 있습니다.

FLASK_ENV=production3. **보안**: 프로덕션 환경에서는 HTTPS 설정을 권장합니다.

```

## 🛠 트러블슈팅

### Railway 배포

### 포트가 이미 사용 중인 경우

Railway Variables:

- `OPENAI_API_KEY`: OpenAI API 키```bash

- `FLASK_ENV`: `production`# 5000번 포트를 사용하는 프로세스 확인

lsof -i :5000

---

# 프로세스 종료

## 🎤 음성인식kill -9 [PID]

```

- Web Speech API 사용

- HTTPS 필수 (Railway 자동 제공)### Python 버전 확인

- 한국어 지원

- Chrome, Edge 권장```bash

python3 --version

---```



## 📚 추가 문서### 로그 확인



- Railway 배포: `RAILWAY_DEPLOY.md`서버 실행 시 터미널에 출력되는 로그를 확인하세요.

- 빠른 시작: `RAILWAY_QUICKSTART.md`

- Linux 설정: `LINUX_SETUP.md`## 📞 지원



---문제가 발생하면 터미널의 에러 메시지를 확인하세요.


## 🎯 배포 체크리스트

- [ ] Railway 가입
- [ ] 프로젝트 생성
- [ ] GitHub 저장소 연결
- [ ] 환경 변수 설정
- [ ] 배포 확인
- [ ] URL 테스트
- [ ] Frontend에 URL 전달

자세한 내용: `RAILWAY_QUICKSTART.md`
