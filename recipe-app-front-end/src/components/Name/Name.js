import React from 'react';

const Name = ({ name }) => {
  return (
    <div className="tc">
      <div className="white f3 pa3">
        {`Hi ${name}, add your recipe please.`}
      </div>
    </div>
  );
};

export default Name;
