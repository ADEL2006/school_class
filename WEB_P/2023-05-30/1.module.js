// testImport 함수를 정의하여 export시킨다.
// 그럼 다른 파일(모듈)에서 import를 해서 testImport 함수를 사용할 수 있다.
export const testImport_1 = () => {
  console.log(
    "외부 js 파일인 1.module.js 파일에 정의된 함수 testImport_1 입니다."
  );
};

export const testImport_2 = () => {
  console.log(
    "외부 js 파일인 1.module.js 파일에 정의된 함수 testImport_2 입니다."
  );
};

/*
아래처럼 여러 함수, 객체를 각각 export 하지 않고 모아서 export 해도됨
*/
// const testImport_1 = () => {
//   console.log(
//     "외부 js 파일인 1.module.js 파일에 정의된 함수 testImport_1 입니다."
//   );
// };

// const testImport_2 = () => {
//   console.log(
//     "외부 js 파일인 1.module.js 파일에 정의된 함수 testImport_2 입니다."
//   );
// };

// export { testImport_1, testImport_2 };
