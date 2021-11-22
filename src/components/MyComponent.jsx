const MyComponent = (props) => {
  // 컴포넌트 - 교재 88p
  //   const name = props.name;
  //   const name2 = props.name2;
  const { name, name2, children } = props;

  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      그리고, 제 이름은 {name2}입니다.
      {children}
    </div>
  );
};

export default MyComponent;
