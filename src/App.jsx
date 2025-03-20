import { useState } from "react";
import Form from "./components/form.jsx";
import Message from "./components/message.jsx";
import "./App.css";

function App() {
  const [userEmail, setUserEmail] = useState("");
//Receiving data from our props (Form) which is in our components/form.jsf file
  const handleReceiveData = (data) => { 
    setUserEmail(data);// and set as email adress
  };

  return (
    <>
      <div>
      {/* our header  */}
        <h1>Hello Techtonica</h1>  
        {/* function handleReceiveData we send to our component  Form .Don't delete , otherwise we will receive email but we cant send dat through our props Form to parent component */}
        <Form onSendData={handleReceiveData} /> 
        {/* Here we saying that if user add email in input it will show message as email address , or if not then it will be null(nothing) and Don' delete cause we sending from paren App.jsx to props message.jsx which contains that  {!email ? null : <p> Thank you for submiting your email: {email} </p>} */}
        {!userEmail ? null : <Message email={userEmail} />} 
      </div>
    </>
  );
}

export default App;

