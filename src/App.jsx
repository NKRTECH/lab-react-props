import './App.css';
function App(props) {
  // code here
  const getimage = props.data;
  console.log('functional component',props)
  return (
    <> 
      <h1>KALVIUM GALLERY</h1> 
      <div className="app">
      {getimage.map((ele)=>{
        return <img src={ele.img} alt="elephant" key={ele.id}/>
      })}
    </div>
    </>
  );
}

export default App;
