import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Say from './components/Say';
import EventPractice from './components/EventPractice';
import IterationSample from './components/IterationSample';

const App = () => {
  return (
    <>
      {/* <MyComponent name='react' name2='react2'>
        <h1>안녕안녕</h1>
      </MyComponent>
      //열린 태그와 닫힌 태그 사이의 값을 children으로 전달할 수 있다. 
      <MyComponent name='vue' name2='angular' />
      */}
      {/* <Counter /> */}
      {/* <Say /> */}
      {/* <EventPractice /> */}
      <IterationSample />
    </>
  );
};

export default App;
