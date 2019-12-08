import React from 'react';
import './App.css';
import './styles/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="container" >
      <div className='row' style={{ marginTop: 200 }}>
        <div className='col-12 text-center'>
          <h1 >
            Impact of the 2020 Bitcoin Halving: <br />
            A Mathematical, Social, and Econometric Analysis
          </h1>
          <h3>By <a href='https://jered.cc'>Jered Masters</a><br />November 2019</h3>
        </div>
      </div>
      <div className='row' style={{ marginTop: 50 }}>
        <div className='col-12 text-center'>
          <a target="_blank" href='/Impact%20of%20the%202020%20Bitcoin%20Halving.pdf' className='btn btn-info'>Download PDF <i className="fa fa-download"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
