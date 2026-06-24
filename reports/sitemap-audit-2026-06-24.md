# 비오랩 국내 사이트맵 정밀 점검 리포트

점검일: 2026-06-24  
대상 사이트: https://biolabkr.com/  
기준 자료: `C:\Users\우지윤\Downloads\비오랩 재팬 홈페이지-Site Map.pptx`

## 1. 결론

현재 국내 사이트의 상단 메뉴와 주요 하위 메뉴는 PPT 사이트맵 구조를 대체로 반영하고 있다.

다만 실제 빌드 및 공개 sitemap 기준으로는 PPT 구조만 남은 상태가 아니다. 기존 국내 사이트의 과거 페이지가 30개 더 생성되고 있고, 이 페이지들이 `https://biolabkr.com/sitemap-0.xml`에도 포함되어 검색 노출 대상이 된다.

따라서 현재 상태는 다음처럼 판단한다.

- 화면 상단 메뉴 구조: 기준 사이트맵과 일치
- 필수 페이지 접속 상태: 모두 200 정상
- 실제 공개 sitemap: 기준 사이트맵보다 과도하게 넓음
- 과거 페이지 정리 상태: 미완료
- 도메인 루트 배포: 정상
- 내부 링크/이미지 누락: 발견 없음
- 폰트 로딩/탭 잘림/가로 스크롤: 주요 화면 기준 문제 없음

## 2. PPT 기준 사이트맵

PPT에서 추출한 기준 구조는 다음과 같다.

```text
Home

회사소개
- 대표이사 인사말
- 비전 및 목표

사업 & 서비스
- 기능성 소재 공급
  - Microbiome Probiotics
  - Functional Nature's Food Ingredients
- OEM/ODM Service
- Brand Management

공급제품
- Microbiome Probiotics
  - 전체 리스트
  - 품목별 소개페이지 7개
- Functional Nature's Food Ingredients
  - 전체 리스트
  - 품목별 소개페이지 7개

문의사항
- E-Catalog
- Customer Inquiries
  - 고객 문의사항
  - 소통채널
```

## 3. 현재 국내 사이트 반영 상태

### 3.1 상단 메뉴

현재 상단 메뉴는 다음과 같이 구성되어 있으며, PPT의 4대 메뉴와 일치한다.

```text
회사소개
사업/서비스
공급제품
문의사항
```

하위 메뉴도 현재 코드 기준으로 다음처럼 구성되어 있다.

```text
회사소개
- 대표 인사말
- 비전 및 목표

사업/서비스
- 기능성 소재 공급
- OEM/ODM 서비스
- 브랜드 매니지먼트

공급제품
- Microbiome Probiotics
- Functional Nature's Food Ingredients
- E-Catalog

문의사항
- E-Catalog
- 고객 문의사항
- 소통채널
```

판정: 구조상 대부분 일치한다. 국내 사이트에 맞춰 `Brand Management`가 `브랜드 매니지먼트`, `Customer Inquiries`가 `고객 문의사항`으로 자연스럽게 번역된 상태다.

### 3.2 필수 페이지 접속 상태

아래 필수 16개 페이지는 모두 라이브 사이트에서 200 OK를 반환했다.

```text
/
/company/
/company/greeting/
/company/vision/
/business/
/business/materials/
/business/odm-oem/
/business/brand-management/
/products/
/products/microbiome-probiotics/
/products/nature-ingredients/
/products/catalog/
/support/
/support/catalog/
/support/contact/
/support/channels/
```

### 3.3 제품 리스트 수량

PPT 기준은 각 제품군별 품목별 소개페이지 7개다.

현재 데이터 기준:

- Microbiome Probiotics: 7개
- Functional Nature's Food Ingredients: 7개

판정: 수량은 기준과 일치한다.

주의점: 현재 7개 품목은 리스트 카드로는 노출되지만, 각 원료별 전용 상세 URL은 아직 별도로 생성되어 있지 않다. 대신 기존 iHEAL 브랜드 제품 상세 페이지 URL들이 남아 있다.

## 4. 불일치 및 잔여 페이지

현재 빌드는 총 46개 페이지를 생성한다. PPT 기준 필수 페이지는 16개이므로, 30개가 초과 생성된다.

초과 생성되는 페이지는 다음과 같다.

```text
/company/history/
/company/location/
/company/overview/
/company/partners/
/products/diet/
/products/guide/
/products/guide/inner-care-ph-balance/
/products/guide/kids-probiotics-guide/
/products/guide/women-probiotics-routine/
/products/inner-care/
/products/inner-clean-v/
/products/kids-lac-probiotics/
/products/kids/
/products/line-n-probiotics/
/products/venus-inner-perfume/
/products/venus-probiotics/
/products/venus-stick-probiotics/
/products/women/
/support/faq/
/support/news/
/support/news/global-partnership-contact/
/support/news/kids-lac-product-update/
/support/news/oliveyoung-venus-probiotics/
/support/news/qoo10-awards-2025-best-shop/
/support/news/qoo10-iheal-case/
/support/news/qoo10-iheal-official-shop/
/technology/
/technology/ingredients/
/technology/quality/
/technology/research/
```

이 페이지들은 단순히 코드에 남아 있는 정도가 아니라 라이브에서 실제로 200 OK로 열리고, sitemap에도 포함된다.

판정: 사이트맵을 PPT 구조로 정리하려면 이 페이지들을 삭제, 리다이렉트, 또는 sitemap 제외 처리해야 한다.

## 5. 링크, 자산, 렌더링 점검

### 5.1 내부 링크 및 이미지

빌드 산출물 기준으로 모든 내부 `href`와 `src`를 검사했다.

결과:

```text
NO_MISSING_INTERNAL_ASSETS_OR_LINKS
```

판정: 내부 링크나 이미지 파일 누락은 발견되지 않았다.

### 5.2 브라우저 렌더링

라이브 사이트에서 다음 페이지를 데스크톱과 모바일로 확인했다.

```text
/
/products/microbiome-probiotics/
/products/nature-ingredients/
/support/
/support/channels/
```

확인 결과:

- HTTP status: 모두 200
- 콘솔 에러: 없음
- `document.fonts.status`: loaded
- 가로 오버플로우: 없음
- 제품 탭 텍스트 잘림: 없음
- 모바일 탭: 긴 영문 탭도 잘림 없이 표시

판정: 주요 화면 기준 레이아웃, 폰트, 탭 표시는 안정적이다.

## 6. 도메인 및 SEO 설정

### 6.1 커스텀 도메인

현재 설정:

```text
site: https://biolabkr.com
CNAME: biolabkr.com
robots sitemap: https://biolabkr.com/sitemap-index.xml
```

판정: 커스텀 도메인 루트 배포 설정은 정상이다. 예전 `/biolabKR/` base path는 제거되어 있다.

### 6.2 HTTPS 및 www

확인 결과:

```text
https://biolabkr.com/      200 OK
https://www.biolabkr.com/  301 -> https://biolabkr.com/
http://biolabkr.com/       200 OK
```

판정:

- `www`는 apex 도메인으로 정상 리다이렉트된다.
- 단, `http://biolabkr.com/`은 HTTPS로 강제 전환되지 않는다.

권고:

- GitHub Pages Settings에서 `Enforce HTTPS`가 켜져 있는지 확인한다.
- DNS 전파 직후에는 잠시 HTTP가 남을 수 있으나, 최종적으로는 HTTP -> HTTPS 301이 되어야 한다.

### 6.3 Sitemap 과다 노출

현재 `https://biolabkr.com/sitemap-0.xml`에는 45개 URL이 노출된다. PPT 기준 구조만 검색에 노출하려면 과거 페이지를 sitemap에서 제거해야 한다.

## 7. 콘텐츠 품질 이슈

### 7.1 회사 기본 정보 placeholder

현재 `src/data/site.ts`에 아래 placeholder가 남아 있다.

```text
대표: 대표자명
대표번호: 02-0000-0000
팩스: 02-0000-0001
사업자번호: 000-00-00000
```

이 정보는 푸터와 고객 문의 페이지에 그대로 노출된다.

권고:

- 실제 대표자명, 대표번호, 팩스, 사업자번호가 확정되면 즉시 교체한다.
- 공개 전 임시값을 숨기려면 해당 필드를 푸터와 문의 페이지에서 제거하거나 `문의처 확인 중` 같은 표현으로 바꾼다.

### 7.2 Home 본문에 과거 뉴스 섹션 노출

상단 메뉴는 PPT 구조로 바뀌었지만, 홈 본문에는 `공지사항 / 보도자료` 섹션과 과거 뉴스 링크가 남아 있다.

이 자체가 오류는 아니지만, PPT 사이트맵의 `문의사항` 구조와는 별개로 `support/news` 페이지를 계속 노출시키는 역할을 한다.

권고:

- PPT 사이트맵을 엄격히 적용하려면 홈 뉴스 섹션을 제거하거나 `소통채널` 또는 `E-Catalog` 안내 섹션으로 대체한다.
- 뉴스 기능을 유지할 경우에는 사이트맵에 `공지/뉴스`를 정식 메뉴로 넣는 편이 구조적으로 일관된다.

## 8. 권장 수정 순서

1. 사이트맵 엄격 적용 여부 결정
   - 엄격 적용: 과거 페이지 삭제 또는 리다이렉트, sitemap 제외
   - 유연 적용: 메뉴만 PPT 기준 유지, 기존 뉴스/제품/기술 페이지는 보조 페이지로 유지

2. 제품 상세 페이지 구조 결정
   - PPT 기준대로 각 제품군 7개 품목별 상세 페이지를 만들지
   - 현재처럼 전체 리스트 카드 중심으로 둘지 결정

3. 과거 페이지 정리
   - `technology/*`
   - `products/women`, `products/kids`, `products/diet`, `products/inner-care`
   - `products/guide/*`
   - `support/news/*`, `support/faq`
   - `company/history`, `company/location`, `company/overview`, `company/partners`

4. 회사 정보 placeholder 교체
   - 대표자명
   - 사업자번호
   - 전화/팩스
   - 이메일 도메인 확정

5. HTTPS 강제 확인
   - GitHub Pages `Enforce HTTPS` 활성화 여부 확인
   - `http://biolabkr.com/`이 최종적으로 `https://biolabkr.com/`로 301 되는지 재확인

## 9. 현재 판단

현재 국내 사이트는 "상단 메뉴 기준으로는 PPT 사이트맵을 반영한 상태"다.

하지만 "사이트 전체가 PPT 사이트맵만 남은 상태"는 아니다. sitemap과 라이브 URL 기준으로 과거 국내 사이트 페이지가 여전히 많이 열리고 있으므로, 검색 노출과 사용자의 직접 접근까지 정리하려면 추가 정리 작업이 필요하다.

