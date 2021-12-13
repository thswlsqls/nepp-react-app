import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Say from './components/Say';
import EventPractice from './components/EventPractice';
import IterationSample from './components/IterationSample';
import VendingMachine from './components/VendingMachine';
import Counter2 from './components/Counter2';
import Info from './components/Info';
import Counter3 from './components/Counter3';
import Average from './components/Average';
import StyledComponent from './components/StyledComponent';
import Todo from './components/Todo';
import Axios from './components/Axios';
import NewsList from './components/news/NewsList';
import Categories from './components/news/Categories';
import News from './components/news/News';
import Bootstrap from './components/bootstrap/Bootstrap';

import { useState } from 'react';

// import './App.scss';
import styles from './App.module.scss';

const App = () => {
  // const [visible, setVisible] = useState(true);

  // console.log(1);
  // setTimeout(() => {
  //   console.log(2);
  // }, 0);
  // console.log(3);

  function printMe() {
    console.log('Helllo World');
  }
  setTimeout(printMe, 3000);
  console.log('대기중');

  return (
    <>
      {/* <div className='react-2'>
        <div className='box orange'></div>
        <div className='box red'></div>
        <div className='box blue'></div>
      </div> */}
      {/* <div className={styles['react-2']}>
        <div className={`${styles.box} ${styles.orange}`}></div>
        <div className={`${styles.box} ${styles.red}`}></div>
        <div className={`${styles.box} ${styles.blue}`}></div>
      </div>
      <StyledComponent /> */}
      {/* <Todo /> */}
      {/* <Axios /> */}
      {/* <MyComponent name='react' name2='react2'>
        <h1>안녕안녕</h1>
      </MyComponent>
      //열린 태그와 닫힌 태그 사이의 값을 children으로 전달할 수 있다. 
      <MyComponent name='vue' name2='angular' />
      */}
      {/* <Counter /> */}
      {/* <Say /> */}
      {/* <EventPractice /> */}
      {/* <IterationSample /> */}
      {/* <VendingMachine /> */}
      {/* <Counter2 /> */}
      {/* <button onClick={() => setVisible(!visible)}>
        {visible ? '보이기' : '숨기기'}
      </button>
      {visible && <Info />}
      <Counter3 /> */}
      {/* <Average /> */}
      {/* <Categories />
      <NewsList /> */}
      <News />
      {/* <Bootstrap /> */}
    </>
  );
};

export default App;
