import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAxolotl } from '../actions';

const Axolotl = ({ getAxolotl, axolotl, isFetching, error }) => {
  useEffect(() => {
   getAxolotl();
  }, [])

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching Axolotl for ya!</h2>;
  }

  const handleClick = () => {
    getAxolotl();
  }

  return (
    <>
      <div style={{color:'white'}}>
        <img width={200} height={200} src={axolotl.url}/>
        <p>
          Fun fact:  {axolotl.facts}
        </p>
      </div>
      <button onClick={() => handleClick()}>Get new Axolotl</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    axolotl: state.axolotl,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getAxolotl })(Axolotl);