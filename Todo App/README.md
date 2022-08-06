#### Todo App 만들면서 알게 된 내용 

---

https://velog.io/@yyy/React-Native-To-do-list-%EB%A7%8C%EB%93%A4%EA%B8%B0 를 참고하였습니다.



#### 개발 순서 

---

1. 기본 UI 구성 
   - Title
   - Input
   - Task

2. 기능 구현 

---



1. 프로젝트 생성 

- 프로젝트 생성 후 필요한 라이브러리 설치 

```bash
expo init app-name
```



2. 컴포넌트 구조? 대로 폴더 및 파일 생성 

- src/ App.js 
- src/components/Title.js
  - props로 받아올 것 생각하면서 짜기 .. 



- src/components/Input.js



3. 이벤트 함수 생성 

- useState  
  - newTask, setNewTask 로 state와 state 관리/변경할 수 있는 세터 함수 생성해서 사용..



#### Error! 

 vector-icons 사용하는 과정에서 에러가 났다. 

- 시도한 방법

```
1. png 파일 저장
2. asset
```

