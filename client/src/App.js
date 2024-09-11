import logo from './logo.svg';
import { useRef, useState , useEffect} from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file,setFile]=useState('');
  const [result,setResult]=useState('');
  const fileinputRef=useRef();
  const logo='https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-image-upload_516790-2221.jpg?w=740';
  useEffect(()=>{

    const getImage=async ()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

      let response= await uploadFile(data);
      setResult(response.path);
      }
    }
  },[file])
  const onUploadClick=()=>{
    fileinputRef.current.click();
  }
  return (
    <div className="App">
   <img src={logo} className="App-logo" alt="logo" />
   <div className="App-header">
    <h1>Advance File sharing</h1>
    <p>Upload and Share the Download Link to Download</p>
    <button onClick={()=>onUploadClick()}>Upload</button>
    <input type="file"
    ref={fileinputRef}
    style={{display:'none'}}
    onChange={(e)=>setFile(e.target.files[0])}
    />

<a href={result} target='_blank'>{result}</a>
   </div>
    </div>
  );
}

export default App;
