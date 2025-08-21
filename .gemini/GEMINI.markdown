# Gemini CLI 설정 (Next.js 프로젝트용)

## 프로젝트 개요

이 프로젝트는 **pnpm workspaces 기반의 모노레포**로 Next.js 웹 애플리케이션(`apps/web`)과 공통 컴포넌트 라이브러리(`packages/ui`)를 관리합니다. **shadcn/ui**를 UI 컴포넌트로 사용하며, **Neon PostgreSQL** 데이터베이스와 **Drizzle ORM**을 활용합니다. **Vercel**로 배포되며, **GitHub Actions**를 통한 **고급 CI/CD 파이프라인**을 운영합니다. 디자인 원칙은 `.gemini/design.json`에 정의된 SaaS UX/UI 가이드라인을 따르며, **AI 기반의 예측적 UX/UI** 원칙이 추가되었습니다. pnpm을 패키지 매니저로 사용하며, 실서비스 수준의 워크플로우(인증, 테스트, 마이그레이션, 모니터링)를 지원합니다. 작업 진행은 `.gemini/tasks.json`을 참조하세요.

## 디자인 원칙

- **참조 파일**: `.gemini/design.json`
- **설명**: shadcn/ui를 기반으로 한 디자인 원칙으로, 생생한 컬러 팔레트(블루, 그린, 오렌지), 모듈러 그리드 레이아웃, 다크/라이트 모드 토글(상단 우측 배치), 마우스 오버 시 애니메이션(scale-up, shadow 효과)이 적용된 Card 컴포넌트를 포함합니다. **AI 기반의 예측적 UX/UI** 원칙이 새롭게 추가되었습니다. 자세한 내용은 `.gemini/design.json`을 확인하세요.
- **적용 방법**: shadcn MCP를 통해 `.gemini/design.json`의 원칙을 자동 적용 (예: `@shadcn Card 컴포넌트 추가`). Tailwind CSS 설정은 `tailwind.config.js`에서 반영.

## 코드 스타일 및 표준

- **언어**: TypeScript (strict 모드 활성화)
- **포맷터**: Prettier
- **린터**: ESLint (Next.js, TypeScript 규칙 준수)
- **환경 변수**: `.gemini/secrets.json`에 민감한 정보 저장. `.env.local` 파일은 로컬 환경용.

## 환경 변수 (Secrets)

- **참조 파일**: `.gemini/secrets.json`
- **설명**: API 키, 비밀번호 등 민감한 정보를 관리합니다.
- **필수 키**: Gemini CLI, NextAuth (`NEXTAUTH_SECRET`, `GITHUB_ID`, `GITHUB_SECRET`), Playwright E2E 계정, Vercel/GitHub CI/CD 토큰, Sentry 인증 토큰.
- **주의**: `.gemini/secrets.json`은 `.gitignore`에 반드시 추가하여 버전 관리에 포함되지 않도록 하세요.

## MCP 서버 통합 관리

MCP 서버 설정은 `.gemini/mcpServer.json`에서 중앙 관리됩니다. **gemini-cli를 자체 MCP 서버로 추가**하여 더욱 강력한 워크플로우를 구축할 수 있습니다. 설정 방법:

1. `.gemini/mcpServer.json` 확인 후 `.gemini/secrets.json`에 API 키 추가
2. `/mcp`로 서버 상태 확인
3. `/mcp desc`로 상세 정보 확인

## 작업 목록

- **참조 파일**: `.gemini/tasks.json`
- **설명**: **모노레포 전환** 및 **고급 CI/CD 파이프라인**을 포함한 개발 작업을 순차적으로 진행하기 위한 작업 목록입니다. 각 태스크는 MCP를 활용하여 자동화되며, 완료 시 확인 후 다음 단계로 이동하세요.
- **적용 방법**: `pnpm dlx gemini`로 작업 실행, 완료 후 GitHub MCP로 PR 생성.

## 도구 사용 가이드라인

- **파일 작업**: Filesystem MCP 사용
- **데이터베이스**: Neon/Drizzle MCP 사용
- **인증**: Auth MCP로 OAuth 설정
- **테스트**: **`test` (단위 테스트)** 및 **`e2e` (엔드투엔드 테스트)** MCP 사용
- **배포**: Vercel/GitHub MCP 사용
- **디자인**: shadcn/Storybook MCP 사용
- **모니터링**: Sentry MCP 사용
- **보안**: `.gemini/secrets.json`에 키 저장

## 예시 프롬프트

- "app/dashboard/page.tsx에 `design.json` 원칙에 따라 카드 컴포넌트 추가해줘"
- "drizzle MCP로 `user` 테이블 마이그레이션 스크립트 생성해줘"
- "e2e MCP로 로그인 페이지 테스트 스크립트 작성해줘"
- "github MCP로 PR을 생성해줘"
