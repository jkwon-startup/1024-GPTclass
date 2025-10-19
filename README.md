# GPTs를 활용한 생산성 향상 강의

> 강사: 권정선 (여행가J)
> AI 시대, 스마트하게 일하는 방법

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-green.svg)](https://pages.github.com/)

## 📋 프로젝트 소개

이 프로젝트는 **GPT와 AI 도구를 활용한 업무 생산성 향상**을 주제로 한 인터랙티브 웹 강의 슬라이드입니다.

- **대상**: 다양한 연령대의 AI 초보자
- **방식**: 이론 강의 후 실시간 시연
- **환경**: GPT 웹 버전, 구글 크롬 브라우저

## 🎨 디자인 특징

- **Apple 스타일 디자인**: 미니멀하고 세련된 UI/UX
- **awwwards 수상작 스타일**: 인터랙티브하고 모던한 애니메이션
- **16:9 비율**: 1920x1080 최적화 (프레젠테이션 표준)
- **P5.js 배경**: 블루-그린 그라데이션 웨이브 애니메이션
- **반응형 디자인**: 모바일부터 데스크톱까지 완벽 지원

## 🚀 주요 기능

### 인터랙티브 네비게이션
- ⌨️ **키보드 컨트롤**: 화살표 키, 스페이스, PageUp/Down
- 🖱️ **마우스 휠**: 스크롤로 슬라이드 전환
- 📱 **터치 제스처**: 모바일 스와이프 지원
- 🎯 **고정 네비게이션**: 상단 메뉴로 빠른 이동

### 시각적 요소
- ✨ **P5.js 애니메이션**: 부드러운 그라데이션 웨이브
- 🎨 **블루&그린 컬러**: 브랜드 아이덴티티 일관성
- 📊 **진행 표시줄**: 실시간 슬라이드 진행 상황
- 🔄 **트랜지션**: 부드러운 페이드 애니메이션

### 생산성 도구 링크
- 🔗 **모든 버튼 하이퍼링크**: 실제 서비스로 즉시 이동
- 📚 **학습 자료**: GitHub, ChatGPT 예제 등
- 🌐 **공식 문서**: OpenAI, Google, Perplexity 링크

## 📚 강의 구성

### 1️⃣ OpenAI ChatGPT
- ChatGPT 기본 원리 및 프롬프트 작성법
- Creative Contents GPTs (이미지 생성, 보고서 작성 등)
- 업무 자동화 GPTs (엑셀 분석, 이메일 자동화 등)

### 2️⃣ Google Gemini
- 구글 워크스페이스 & 앱스크립트
- 이메일 분석 및 답장 자동화
- 해외 시장 조사 (Deep Research, NotebookLM)

### 3️⃣ Comet Browser
- Perplexity.ai의 새로운 브라우저
- 친구 초대 프로그램
- AI 통합 생산성 기능

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, Custom Properties
- **JavaScript (ES6+)**: 클래스 기반 OOP

### 라이브러리
- **P5.js**: 배경 애니메이션 생성
- **Vanilla JS**: 프레임워크 없는 순수 자바스크립트

### 배포
- **GitHub Pages**: 정적 사이트 호스팅
- **GitHub Actions**: 자동 배포 워크플로우

## 📁 프로젝트 구조

```
1024 GPTclass/
├── index.html              # 메인 슬라이드 페이지
├── css/
│   └── style.css          # 통합 스타일시트
├── js/
│   ├── main.js            # 슬라이드 네비게이션 로직
│   └── p5-background.js   # P5.js 배경 애니메이션
├── lectures/
│   ├── openai.html        # OpenAI 상세 강의
│   ├── gemini.html        # Gemini 상세 강의
│   └── comet.html         # Comet 상세 강의
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages 배포 설정
└── README.md              # 프로젝트 문서
```

## 🚀 로컬에서 실행하기

### 1. 저장소 클론

```bash
git clone https://github.com/YOUR_USERNAME/1024-GPTclass.git
cd 1024-GPTclass
```

### 2. 로컬 서버 실행

#### Python을 사용하는 경우:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Node.js를 사용하는 경우:
```bash
npx http-server
```

#### VS Code Live Server 사용:
- VS Code에서 `index.html` 우클릭
- "Open with Live Server" 선택

### 3. 브라우저에서 열기

```
http://localhost:8000
```

## 📦 GitHub Pages 배포

### 자동 배포 (권장)

이 프로젝트는 GitHub Actions를 통해 자동 배포됩니다.

1. **저장소 설정**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **GitHub Pages 활성화**
   - GitHub 저장소 → Settings → Pages
   - Source: **GitHub Actions** 선택
   - 자동으로 배포 시작

3. **배포 확인**
   - Actions 탭에서 배포 상태 확인
   - 완료 후 `https://YOUR_USERNAME.github.io/1024-GPTclass/` 접속

### 수동 배포

```bash
git add .
git commit -m "Update content"
git push origin main
```

푸시 후 자동으로 배포가 시작됩니다.

## 🎯 사용 방법

### 슬라이드 네비게이션

| 동작 | 키/제스처 |
|------|-----------|
| 다음 슬라이드 | `→`, `↓`, `Space`, `PageDown` |
| 이전 슬라이드 | `←`, `↑`, `PageUp` |
| 첫 슬라이드 | `Home` |
| 마지막 슬라이드 | `End` |
| 특정 슬라이드 | 상단 메뉴 클릭 |

### 모바일
- **스와이프 업**: 다음 슬라이드
- **스와이프 다운**: 이전 슬라이드
- **네비게이션 버튼**: 우측 하단 화살표

## 🔗 주요 링크

### 강의 자료
- [GitHub 저장소](https://github.com/jkwon-startup/GPTmake)
- [ChatGPT 예제](https://chatgpt.com/share/68f45d08-cc44-8007-9011-36d7527076c4)

### AI 도구
- [ChatGPT](https://chatgpt.com)
- [Google Gemini](https://gemini.google.com)
- [NotebookLM](https://notebooklm.google.com)
- [Comet Browser](https://pplx.ai/gloriosa0444527)
- [Perplexity.ai](https://www.perplexity.ai)

### 공식 문서
- [OpenAI Docs](https://platform.openai.com/docs)
- [Google AI Docs](https://ai.google.dev)
- [Apps Script](https://developers.google.com/apps-script)

## 🎨 커스터마이징

### 색상 변경

`css/style.css`의 `:root` 변수 수정:

```css
:root {
    /* 블루 그라데이션 */
    --blue-primary: #007AFF;
    --blue-dark: #0066CC;
    --blue-light: #5AC8FA;

    /* 그린 그라데이션 */
    --green-primary: #34C759;
    --green-dark: #30D158;
    --green-light: #63E6A6;
}
```

### P5.js 배경 수정

`js/p5-background.js`에서 웨이브 개수, 색상, 속도 등 조정 가능:

```javascript
const numWaves = 3;        // 웨이브 개수
const numParticles = 50;   // 파티클 개수
```

### 슬라이드 추가

1. `index.html`에 새로운 섹션 추가:
```html
<section class="slide" data-slide="7">
    <div class="slide-content">
        <!-- 내용 추가 -->
    </div>
</section>
```

2. 네비게이션 메뉴에 링크 추가:
```html
<li><a href="#slide-7" data-slide="7">새 섹션</a></li>
```

## 🐛 문제 해결

### 슬라이드가 전환되지 않을 때
- 브라우저 콘솔에서 JavaScript 오류 확인
- `main.js`가 올바르게 로드되었는지 확인

### P5.js 배경이 보이지 않을 때
- P5.js CDN 연결 확인
- `p5-background.js` 로드 확인
- 브라우저 콘솔에서 오류 메시지 확인

### GitHub Pages 배포 실패
- `.github/workflows/deploy.yml` 파일 확인
- Actions 탭에서 오류 로그 확인
- GitHub Pages 설정이 올바른지 확인

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자유롭게 사용, 수정, 배포할 수 있습니다.

## 👨‍🏫 강사 정보

**권정선 (여행가J)**
- AI 활용 생산성 전문가
- ChatGPT & Custom GPTs 개발자
- 업무 자동화 컨설턴트

## 🙏 감사의 말

- **OpenAI**: ChatGPT 및 GPT 모델 제공
- **Google**: Gemini 및 Workspace 도구
- **Perplexity.ai**: Comet Browser
- **P5.js**: 아름다운 배경 애니메이션 가능하게 함
- **GitHub**: 무료 호스팅 및 버전 관리

## 📞 문의

궁금한 점이나 제안사항이 있으시면 이슈를 등록해 주세요!

---

**⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!**

Made with ❤️ by 권정선 (여행가J)
