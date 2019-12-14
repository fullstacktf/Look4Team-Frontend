import * as React from "react";
import styled from "@emotion/styled";

export interface CardProps {
  name: string;
  photo: string;
  content: string; //contenido eventos (hora, fecha, lugar) o grupos (avatars)
}

const DIV = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  width: 15rem;

  p {
    margin: 0.3em;
  }
  div {
    padding: 0.2em;
    display: flex;
  }
  hr {
    margin: 0em;
  }

  img {
    width: 3em;
    height: 3em;
    border: 1px solid black;
    border-radius: 1px;
    margin: 0.4em;
  }
`;

const Card: React.FC<CardProps> = ({ name, photo, content }) => {
  return (
    <DIV>
      <p>{name}</p>
      <hr />
      <div>
        <img src={photo} alt="img" />
        <p>{content}</p>
      </div>
    </DIV>
  );
};

//ALTERNATIVA??????
// const Card: React.FC<CardProps> = ({
//   caso,
//   name,
//   photo,
//   lugar,
//   fecha,
//   deporte,
//   amigos
// }) => {
//   switch (caso) {
//     case "events":
//       return (
//         <DIV>
//           <p>{name}</p>
//           <hr />
//           <div>
//             <img src={photo} alt="img" />
//             <p>{lugar}</p>
//             <p>{fecha}</p>
//             <p>{deporte}</p>
//           </div>
//         </DIV>
//       );
//     case "groups":
//       return (
//         <DIV>
//           <p>{name}</p>
//           <hr />
//           <div>
//             <img src={photo} alt="img" />
//             <div>{amigos}</div>
//           </div>
//         </DIV>
//       );
//   }
// };
export default Card;
