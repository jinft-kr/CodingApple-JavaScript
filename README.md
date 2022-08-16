# codingapple-javascript
[JavaScript 입문과 웹 UI개발](https://codingapple.com/course/javascript-jquery-ui/)

1. 강의 소개와 자바스크립트의 근본
   ```
   document.getElementById('hello').innerHTML = '안녕';
   // document : html문서
   // .: ~의
   // getElementById : ID가 hello인 요소를 찾아라
   // innerHTML : 그거의 내부
   // = : 오른쪽을 왼쪽에 넣어라

   // document.getElementById('??').?? = '??';
   // 1. 바꿀 요소 ID 2. 무엇을 3. 어떻게

   // selector : 웹 문서안에 있는 원하는 요소를 찾을 때 쓰는 것 ex) getElementById
   ```
2. 동적 UI 만드는 스텝(Alert 박스 만들기)
   1. UI 만드는 Step
      1. HTML/CSS로 미리 디자인
      2. 필요할 때 보여달라고 JS짬
   2. css파일 추가시 html파일 head태그 안에 `<link rel="stylesheet" href="main.css">` 추가