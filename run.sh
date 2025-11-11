#!/bin/bash

# IGD 챗봇 설문조사 Flask 서버 실행 스크립트

echo "=========================================="
echo "IGD 챗봇 설문조사 서버 시작"
echo "=========================================="

# .env 파일 확인
if [ ! -f .env ]; then
    echo "⚠️  .env 파일이 없습니다!"
    echo "📝 .env.example 파일을 참고하여 .env 파일을 생성하세요."
    echo ""
    echo "예시:"
    echo "  cp .env.example .env"
    echo "  nano .env  # 또는 vim, vi 등으로 편집"
    exit 1
fi

# Python 가상환경 확인 (선택사항)
if [ ! -d "venv" ]; then
    echo "📦 Python 가상환경이 없습니다. 생성하시겠습니까? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        python3 -m venv venv
        echo "✅ 가상환경이 생성되었습니다."
    fi
fi

# 가상환경 활성화 (있는 경우)
if [ -d "venv" ]; then
    echo "🔧 가상환경 활성화 중..."
    source venv/bin/activate
fi

# 필요한 패키지 설치
echo "📦 필요한 패키지 설치 중..."
pip install -r requirements.txt

# userinfo 디렉토리 생성
if [ ! -d "userinfo" ]; then
    mkdir -p userinfo
    echo "📁 userinfo 디렉토리 생성 완료"
fi

# 서버 IP 주소 확인
echo ""
echo "=========================================="
echo "🌐 서버 접속 정보"
echo "=========================================="
echo "로컬 접속: http://localhost:5000"
echo ""
echo "외부 접속 URL (다음 중 하나를 사용):"
hostname -I | awk '{for(i=1;i<=NF;i++) print "  http://"$i":5000"}'
echo "=========================================="
echo ""

# Flask 서버 실행
echo "🚀 Flask 서버를 시작합니다..."
echo "   종료하려면 Ctrl+C를 누르세요."
echo ""

# Gunicorn으로 프로덕션 서버 실행 (더 안정적)
# gunicorn --bind 0.0.0.0:5000 --workers 2 --timeout 120 main:app

# 또는 개발용 Flask 서버 실행
python3 main.py
