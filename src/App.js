
import Square from "./Square";
import Input from "./Input";
import {useState} from 'react';



function App() {
  const [colourValue,setColorValue] = useState('')
  const [hexValue,setHexValue] = useState('')
  const[isDarkText,setIsDarkText] = useState('true')
  return (
    <div className="App">
     
<h1> Hello</h1>
<Square 
colourValue={colourValue}
hexValue={hexValue}
isDarkText={isDarkText}
/>
<Input
colourValue={colourValue}
setColorValue ={setColorValue}
setHexValue={setHexValue}
isDarkText={isDarkText} 
setIsDarkText = {setIsDarkText}

/>


    </div>
  );
}

export default App;
