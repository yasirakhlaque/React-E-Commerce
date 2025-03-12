import '../styles/SuccessAdd.css'

export default function SuccessAdd({state}) {
    return (
        <div style={{ position: "fixed", bottom: "10px", right: "10px", background: "#2424428a", color: "white", padding: "10px", borderRadius: "5px",border:"1px solid grey" }} className='Success-Add'>
         <i className="fa-solid fa-circle-question"></i>   Item {state} Cart!
        </div>
    );
}
