import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Title from './components/Title'
import { IoIosSend } from 'react-icons/io';
import { IoLogoJavascript } from "react-icons/io5";

function App() {

  const log = () => {
    console.log("App")
  }

  const sendMsg = () => {
    alert("The message was sent")

  }


  return (
    <div className="App">
      <header className="App-header">
        <Title text={"Components"} classes={"my-title"} />
        <Card cardHeader={"React Course"} cardText={"JavaScript course"}>
          <IoLogoJavascript style={{ fontSize: "20rem", color: "orange" }} />
          <Button classes={"btn-primary btn-ms"} text='Send' handleEvent={sendMsg} icon={<IoIosSend /> } />
          <Button classes={"btn-secondary btn-block"} text='Add' handleEvent={log} />
        </Card>

      </header>
    </div>
  );
}

export default App;
