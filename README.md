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
3. 자바스크립트 function 문법 사용법
   1. 함수
      ```
      <script>
        function 함수명(){
          document.getElementById('alert').style.display = 'block';
        } 
      </script>
      ```
   2. 함수명 영어작명시
      1. 소문자 시작
      2. camelCase
         1. openAlert()
   3. 조작할 html의 하단에 script 코드를 짜야한다
      1. html을 읽을 때 위에서 아래로 읽기 때문이다.
   4. 자주 실수 하는 부분 디버깅
      1. 존재하지 않는 ID의 경우
         ```
         Uncaught TypeError: Cannot read properties of null (reading 'style')
         at 알림창열기 (index.html?_ijt=718ij32ogrdr4ca17odc4olvq6:17:42)
         at HTMLButtonElement.onclick (index.html?_ijt=718ij32ogrdr4ca17odc4olvq6:14:31)
         ```
      2. 기본 문법 오타
         1. getElementById인데 getElementByid로 작성했을 경우
            ```
            Uncaught TypeError: document.getElementByid is not a function
            at 알림창열기 (index.html?_ijt=718ij32ogrdr4ca17odc4olvq6:17:18)
            at HTMLButtonElement.onclick (index.html?_ijt=718ij32ogrdr4ca17odc4olvq6:14:31)
            ```
4. function의 파라미터 문법
   1. 파라미터 사용하기
      ```
      function plus(i){
        2 + i
      }
      plus(1);
      plus(2);
      plus(3);
      ```
5. 자바스크립트 이벤트리스너
   1. getElementsByClassName : class 로 element 찾기
      1. class명이 중복되는게 있을 경우 인덱싱을 해야함
         1. getElementsByClassName('title')[0]
   2. addEventListener
      1. event: 클릭, 키입력, 스크롤, 드래그 ...
   3. 함수 파라미터 자리에 함수를 쓰면: 콜백함수라함
      1. 콜백함수는 그냥 뭔가 순차적으로 실행하고 싶을 때 많이 보이는 함수형태
6. 서브메뉴 만들어보기와 classList 다루기
   1. Bootstrap 설치 
   2. 클릭시 등장하는 서브메뉴 만들기 
   3. 클래스를 떼었다 붙였다 하려면 toggle() : 파라미터값이 있으면 제거, 없으면 추가
   4. querySelector() : 중복된 id, class가 있을 경우 맨 위에 나오는 한개만 찾아줌
      1. querySelectorAll : 전체를 찾아줌