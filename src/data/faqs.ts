export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "제품 구매나 입점 문의는 어디로 하면 되나요?",
    answer: "고객지원 페이지의 연락처 또는 이메일로 문의해 주세요. 담당자가 확인 후 순차적으로 안내드립니다."
  },
  {
    question: "제품 상세 정보는 어디에서 수정하나요?",
    answer: "`src/data/products.ts`의 제품 데이터를 수정하면 목록과 상세 페이지에 함께 반영됩니다."
  },
  {
    question: "비오랩 제팬 페이지와 연결할 수 있나요?",
    answer: "Header와 Footer의 BIOLAB JAPAN 링크는 `src/data/site.ts`의 `japanUrl` 값을 바꾸면 연결됩니다."
  },
  {
    question: "건강정보 게시글은 DB 없이 운영 가능한가요?",
    answer: "가능합니다. `src/data/articles.ts`에 정적 게시글 데이터를 추가하면 정적 상세 페이지가 생성됩니다."
  }
];

