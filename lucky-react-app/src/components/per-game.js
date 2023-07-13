import React, { useState } from 'react';

const PerGame = () => {
  const [show, setShow] = useState(false);

  const showPerGame = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={showPerGame}>show</button>
      {show && <h1>Hi</h1>}
    </>
  );
};

export default PerGame;
