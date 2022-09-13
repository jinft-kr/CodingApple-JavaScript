# codingapple-javascript
[JavaScript 입문과 웹 UI개발](https://codingapple.com/course/javascript-jquery-ui/)

### Level1
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
7. jQuery 사용법 간단정리
   1. [jQuery 설치](https://releases.jquery.com/)
      1. HTML 조작문법을 쉽게 바꿔주는 라이브러리
   2. 여러가지 jQuery 기본 함수
      1. $('셀렉터')로 찾으면 jQuery함수만 붙일 수 있음
      2. querySelector('셀렉터')로 찾으면 자바스크립트 함수만 붙일 수 있음
   3. 모달창 만들기
      1. one-way UI 애니메이션 만드는 법
         1. 시작스타일
         2. 최종스타일
         3. 원할 때 최종스타일로 변하라고 코드짬
         4. transition 추가
8. 폼만들며 배워보는 if else
   1. form 만들기
      1. 서버로 유저 정보 전송하려고 씀
   2. 전송버튼누를 때 공백체크하려면 
   3. if else 문법
      1. if(조건){조건이 참일 때 실행할 코드} else{위 조건이 참이 아닐 때 실행할 코드}
9. 공백검사 숙제와 else if 문법
   1. 폼전송까지 막으려면
      1. e.preventDefault();
   2. else if 문법
10. input, change 이벤트와 and, or 연산자
    1. input, change 이벤트
       1. input : <input>에 입력한 값이 바뀔 때 발생
          1. ex) (경고) 지금 패스워드 4자 밖에 안됩니다.
       2. change : <input>에 입력한 값이 바뀌고 `포커스를 잃을 때` 발생
    2. if문은 실은 true/false 넣어야함
    3. and or 연산자
11. if/else, function 실력향상 과제
12. 변수 문법과 Dark mode 버튼 만들기
    1. 참고) Bootstrap UI들은 스타일 바꾸려면 class명을 수정해야함
13. 변수 심화학습시간 & 저번시간 숙제
    1. 변수의 선언, 할당, 범위
    2. let, const 써도 변수만들 수 있음
       1. let: 재선언 X 재할당 O
       2. const: 재선언 X 재할당 X

### Level2
1. 변수, 사칙연산 실력향상 과제 
2. setTimeout 타이머주는 법
   1. setTimeout() 쓰는 법
      1. X초 후 코드 실행하려면 setTimeout(function(){실행할 코드}, ms)
   2. setInterval() 쓰는 법
      1. X초마다 코드 실행하려면 setInterval(function(){실행할 코드}, ms)
   3. 자바스크립트 문법이랑 브라우저 사용법이랑 다른 것임 
      1. if var function : 자바 스크립트 문법
      2. document.querySelector() setTimeout() alert() : 브라우저 문법
   4. 콜백함수자리에 함수넣기 스킬
      1. setTimeout(함수, 1000); function 함수(){}
3. 정규식으로 이메일형식 검증해보기
   1. includes() 로 문자검사가능
      1. 한계: 한글이 들어있는지, 영어가 들어있는지, A로 끝나는지, 숫자가 1번 출현하는지는 알 수 없음
      2. 단지, 해당 문자열을 포함하는지 안하는지만 알 수 있음
   2. 정규식(Regular Expression)으로 문자검사가능 
      1. 정규식: 문자를 검사할 수 있는식
      2. /a/.test('abcd') : abcde에 a가 들어있는지
      3. /[a-z]/.test('abcd') : a~z까지 아무 한 글자가 들어있는지
      4. /[a-zA-Z]/.test('abcdA') : 알파벳 아무 글자 하나가 들어있는지
      5. /[ㄱ-ㅎ가-힣]/.test('바보') : 한글이 들어있는지
      6. /\S/ : 아무 문자 하나, 특수문자까지 포함
      7. /^a/ : a로 시작하는지
      8. /a$/ : a로 끝나는지
      9. /a|b/ : a 또는 b 가 있는지
   3. 이메일 검사
      1. /\S+@\S+\.\S+/ 
4. 코드 3줄로 캐러셀 (이미지 슬라이드) 만들기
   1. 시작화면 만들기
      1. One-Way 애니메이션 들어있는 UI 만들기
         1. 시작화면 만들기
         2. 최종화면 만들기
         3. 원할 때 최종화면으로 면하게 JS
         4. transaction 추가
   2. 버튼누른 후 최종화면 만들기
   3. JS 기능넣기와 transition주기
5. 코드 3줄로 캐러셀 (이미지 슬라이드) 만들기 2
   1. 다음사진버튼 만들기 
   2. 문자중간에 변수를 집어넣고 싶으면?
      1. ```
         var count = 1;
         console.log('문자' + count + '문자');
         console.log(`문자${count}문자`)
         ```
6. 함수의 return 문법 & 소수점 다루기
   1. function 문법
      1. 긴 코드 축약해서 쓸 수 있음
      2. 파라미터 추가 가능
      3. return
   2. return 문법
      1. 함수 쓰고 그 자리에 뭔가 반환하고 싶으면
      2. return 밑에 있는 코드는 더이상 실행되지 않는다.
   3. 그래서 이걸 어디에 쓰는데요
      1. 자료를 넣으면 다른 자료가 나오는 변환기 만드록 싶을 때
   4. 소수점 연산시 하찮은 주의점 
      1. 소수점 있는 숫자연산시 이진법으로 연산하기 때문에 약간의 오차가 있을 수 있음
      2. 따라서 소수점 연산을 할 때 라이브러리를 쓰거나 반올림을 해야함
         1. 반올림 하는 법
            ```
            function vat(a){
              var num = (a * 1.1).toFixed(1);
              return parseFloat(num)
            }
            ```
         2. 자바스크립트 + 연산자 특징
            1. '문자' + 123 => '문자123'
            2. '문자' + '문자' => '문자문자'
7. 스크롤 이벤트로 만드는 재밌는 기능들
   1. 스크롤바 내리면 로고폰트 작게만들기
      1. window안에 document가 들어있음
      2. window.scrollY -> window.pageYOffset이랑 똑같음
      3. window.scrollBy(x, y) : 현재 위치부터 강제로 스크롤하기
   2. 스크롤관련 유용한 기능들
   3. 회원약관 끝까지 읽으면 alert 띄우기
   4. 박스 스크롤바 내린 높이는
8. 스크롤 이벤트 숙제 해설 & 페이지 스크롤 응용
   1. 스크롤 다룰 때 주의점 & 응용
      1. scroll 다룰 때 주의점 1. scroll 이벤트 리스너 안의 코드는 1초에 60번 이상 실행 -> 컴퓨터에 부담을 줄 수 있음
      2. scroll 다룰 때 주의점 2. 바닥체크도 여러번 중복으로 해줄듯
   2. 현재 페이지 끝까지 스크롭 체크는? document html 높이
      1. document.querySelector('html').scrollHeight // 현재 페이지 실제 높이
      2. document.querySelector('html').clientHeight //페이지 보이는 부분 높이
      3. window.scrollY // 현재 페이지 스크롤 양
      4. html태그는 페이지 오드 완료시 실행해야 정확 -> 따라서 <body> 끝나기 전에 넣는게 좋음  
      5. document.documentElement.scrollHeight == document.querySelector('html').scrollHeight
   3. 오늘의 교훈
      1. 스크롤바 조작할 때마다 코드 실행 가능하구나
      2. 박스의 실제 높이 / 보이는 높이 구할 수 있구나
      3. 스크롤양도 구할 수 있군
   4. (응용) 페이지 내릴 때 마다 페이지를 얼마나 읽었는지 진척도를 알려주는 UI 같은건 어떻게 만들면 될까요? 
      1. 까만색의 가로로 긴 div 박스 하나 만들고 
      2. 페이지를 1% 읽으면 div 박스 길이는 1% 
      3. 페이지를 50%정도 읽으면 div 박스 길이는 50% 
      4. 페이지 다 읽으면 div 박스 길이는 100% 
      5. 이런거 만들어보면 재미있을 듯
9. 탭기능 만들며 배우는 for 반복문
   1. 탭 디자인부터 해봅시다
      1. 박스 보여줄 때 show를 쓰면 편함
   2. 자바스크립트 코드를 js 파일로 빼려면
      1. <script src="경로"></script>
   3. 버튼0 기능개발하기
10. 탭기능 만들며 배우는 for 반복문2
    1. 좋은 관습 : 셀렉터 변수에 넣어서 쓰기
    2. 코드 복붙해주는 for 반복문 
       - for 안에서 var i = 0 쓰면 
         - var 변수는 범위가 function입니다. 
         - var i 들어있는 포스트잇은 for 바깥에 생성됩니다. 
       - for 안에서 let i = 0 쓰면 
         - let 변수는 범위가 { } 입니다.
         - let i 들어있는 포스트잇은 for 안쪽에 3개 생성됩니다.
       - 그리고 컴퓨터는 변수가져다쓸 때 가까운거 가져다 쓰려고합니다.
    3. for 그래서 어디다 쓰는데
11. 이벤트 버블링과 이벤트관련 함수들
    1. 모달창 검은 배경누르면 모달창 닫는 기능 만들기 
    2. 이벤트 버블링
    3. 이벤트관련 함수들
       1. e.target; // 유저가 실제로 누른거
       2. console.log(e.target); 
       3. e.currentTarget; // 이벤트리스너 달린 곳 // this; 
       4. e.preventDefault(); //이벤트 기본동작 막아줌 
       5. e.stopPropagation(); // 내 상위요소로 이벤트 버블링 막아줌
    4. 버그 고쳐보기
12. 이벤트 버블링 응용과 dataset
    1. 함수로 축약하기
    2. 탭 다른 방식으로 만들건데
    3. dataset 문법알면 더 간단해짐

Level3
1. Array와 Object 자료형
   1. 상세페이지를 만들고 싶은데
   2. Array 자료형
      1. var car = ['소나타', 50000, 'white']; // Array 자료형
   3. Object 자료형
      1. var car2 = {name: '소나타', price: 50000}; //object 자료형 (key, value)
   4. Array / Object 차이
      1. Array : 순서대로 자료 저장, 따라서 자료간 정렬 가능, 중간에 자르기 가능 / Object: 이름을 가지고 저장 가능, 순서개념 없음
2. 약간 복잡한 Array & Object 데이터바인딩
   1. object안에 array가 있으면?
   2. 이런 쓸데없는거 왜하냐면 (서버/클라이언드 사이드 렌더링)
3. 데이터바인딩 숙제 & 문자중간에 변수넣는 법
   1. 새로배울 내용 : 문자 중간에 변수 편하게 넣으려면
      1. ```
         var a = '안녕';
         // '안녕' + a + '안녕';
         // '문자${a}문자'
         ```
4. Select 인풋 다루기
   1. <select> 사용법
   2. 셔츠입력하면 밑에 <select> 하나 더 만들기