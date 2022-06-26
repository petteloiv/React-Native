import React from "react";
import Book from "./Book";

// Library는 총 세개의 book 컴포넌트를 렌더링 하고 있음
function Library(props){
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;