
import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ position:'fixed',overflow: 'scroll', top:'150px',border: 'none',width:'100%', height: '100vh', margin: "auto"}}>
      {props.children}
    </div>
  );
};

export default Scroll;