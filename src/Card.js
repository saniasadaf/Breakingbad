  
  import "./card.css";
  
  function Card(props) {
      console.log("props", props);
      
      return(
          <div className="card1">
              {/* <h1>Contact card of </h1> */}
              <img src={props.src} alt="" />
              <p> Name: {props.name}</p>
              <p>Nickname: {props.nickname}</p>
              <p>Occupation: {props.occupation}</p>
              <p>Birthday: {props.birthday}</p>
              <p>Category: {props.category}</p>
              <p>Char_id: {props.char_id}</p>

          </div>
      );
  }
  export default Card;

