import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/Header";
import InputContainer from "./components/InputContainer";

export default function App() {
  
  const sendMessage = (formData) => {
    const input = formData.get("message");
    alert(input)
  }
  
  return (
    <main>
      <Header />
      <InputContainer handleAction={sendMessage} />
    </main>
  )
}
