// testImport 함수를 정의하여 export시킨다.
// default export. 모듈 당 딱 한 개의 default export만 있어야 합니다.
// 추후 리액트 등에선 컴포넌트라고 부르는 모듈들을 만들어 export 시킨다.
// 그때 아래와 같은 모습을 보게될것임.
// 보통 파일 하나에 export default 하나만 있고 아래 예제처럼 다른 모듈(함수 등)이 없다.
const testImport_1 = () => {
  console.log(
    "외부 js 파일인 2.module.js 파일에 정의된 함수 testImport_1 입니다."
  );
};

export const testImport_2 = () => {
  console.log(
    "외부 js 파일인 2.module.js 파일에 정의된 함수 testImport_2 입니다."
  );
};

export default testImport_1;
