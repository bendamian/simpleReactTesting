
import Square from "./Square";
import Input from "./Input";
import {useState} from 'react';



function App() {
  const [colourValue,setColorValue] = useState('')
  return (
    <div className="App">
     
<h1> Hello</h1>
<Square colourValue={colourValue}/>
<Input
colourValue={colourValue}
setColorValue
/>

    </div>
  );
}

export default App;
