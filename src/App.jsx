import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import sendIcon from "./assets/send.png";

export default function App() {
  
  const sendMessage = (formData) => {
    const input = formData.get("message");
    alert(input)
  }
  
  return (
    <main>
      <form action={sendMessage} className="input-container p-3">
        <div className="input-box">
          <div className="input-group mb-3">
            <input type="text" className="form-control p-2" placeholder="What's on your mind?" aria-label="What's on your mind?" aria-describedby="button-addon2" name="message" />
            
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
              <img src={sendIcon} className="img-fluid" />
            </button>
          </div>
        </div>
      </form>
    </main>
  )
}