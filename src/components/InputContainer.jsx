import sendIcon from "../assets/send.png";

export default function InputContainer(props) {
  return (
    <>
      <form action={props.handleAction} className="input-container p-3">
        <div className="input-box">
            <textarea 
              type="text" 
              ref={props.ref} 
              onChange={props.handleChange} 
              className="form-control p-2 border" 
              placeholder="What's on your mind?" 
              aria-label="What's on your mind?" 
              rows="1"
              aria-describedby="button-addon2" 
              name="message">
            </textarea>
              
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
              <img src={sendIcon} className="img-fluid" />
            </button>
        </div>
      </form>
    </>
  )
}