  
  import "./card.css";
  
  function Card(props) {
      console.log("props", props);
      
      return(
          <div className="card1">
              {/* <h1>Contact card of </h1> */}
              <img className="img" src={props.img} alt="" />
              <p  className="p1"> Name: {props.name}</p>
              <p  className="p2">Nickname: {props.nickname}</p>
              <p  className="p3">Occupation: {props.occupation}</p>
              <p  className="p4">Birthday: {props.birthday}</p>
              <p className="p5">Category: {props.category}</p>
              <p  className="p6">Char_id: {props.char_id}</p>

          </div>
      );
  }
  export default Card;

