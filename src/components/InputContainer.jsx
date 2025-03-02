import sendIcon from "../assets/send.png";

export default function InputContainer(props) {
  return (
    <>
      <form action={props.handleAction} className="input-container p-3 bg-light">
        <div className="input-box">
          <div className="input-group mb-3">
            <input type="text" className="form-control p-3 border" placeholder="What's on your mind?" aria-label="What's on your mind?" aria-describedby="button-addon2" name="message" />
              
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
              <img src={sendIcon} className="img-fluid" />
            </button>
          </div>
        </div>
      </form>
    </>
  )
}