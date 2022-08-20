#### Todo App :white_check_mark:

---

2022.08.06

참고 : https://velog.io/@yyy/React-Native-To-do-list-%EB%A7%8C%EB%93%A4%EA%B8%B0 



#### 개발 순서 

---

1. 기본 UI 구성 
   - Title
   - Input
   - Task



2. 기능 구현 (CRUD)

   - add : 추가 기능 

   - delete : 삭제 기능 

   - complete : 완료 기능

   - update : 수정 기능 

---



1. **프로젝트 생성** 

- 프로젝트 생성 후 필요한 라이브러리 설치 

```bash
expo init app-name
```



#### < UI 구성 > 



2. **컴포넌트 구조? 대로 폴더 및 파일 생성** 

- src/ App.js 
- src/components/Title.js
  - props로 받아올 것 생각하면서 짜기 .. 



- src/components/Input.js



3. **이벤트 함수 생성** 

- useState  
  - newTask, setNewTask 로 state와 state 관리/변경할 수 있는 세터 함수 생성해서 사용..



4. **IconButton, Task 컴포넌트 만들기**



#### < 기능 구현 >

 

5. **C / add : 추가 기능** 

- 필요한 값 정리 

```
- id : 구분용 고유값
- text : 항목 내용 
- completed : 완료 여부 
```

- addTask () 함수 수정 



#### Error! 

 vector-icons 사용하는 과정에서 에러가 났다. 

- 시도한 방법

```
1. png 파일 저장
2. asset/icon/.png 경로로 icon 저장 
3. images.js에서 import 해서 이미지 관리
```

![image-20220806153941100](C:\Users\SSAFY\AppData\Roaming\Typora\typora-user-images\image-20220806153941100.png)

![image-20220806154226864](C:\Users\SSAFY\Desktop\github\React-Native\Todo App\README.assets\image-20220806154226864.png)

- 경로가 이상하다는 에러 발생 .. 
  - png 파일이 분명히 있고 파일명이 같음에도 불구하고 같은 현상 발생 ㅜㅜ 



- 시도한 방법 2 

```jsx
1. import { MaterialCommunityIcons } from '@expo/vector-icons'; 해서 
2. 이미지 파일 대신 
  uncompleted : <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />, 
  인라인으로 사용
```

=> 오류는 나지 않지만 화면에서 보이지 않는다 ㅠㅠ



- 해결한 방법

```jsx
// App.js에 vector-icons import 하고 
<MaterialCommunityIcons name="square-edit-outline" size={24} color="black" />
이런 형식으로 직접적으로 사용
```

=> 해결하고 문제 없이 사용하고있지만 변경하기 귀찮다 ... 기존 방법대로 쓸 방법 찾아보기!