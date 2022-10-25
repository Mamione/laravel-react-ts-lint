import React from 'react';

function App() {
  const [test, setTest] = React.useState<string>('');

  React.useEffect(() => {
    setTest('Heyo');
  }, [setTest]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">App Component</div>

            <div className="card-body">{test}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
