import * as React from "react";
import Icon from "../icon/Icon";
import styled from "@emotion/styled";

export interface DividerContainerProps {
  text: string;
}
const Div = styled.div`
  display: flex;
`;

const Divider: React.FC<DividerContainerProps> = props => {
  return (
    <div>
      <Div>
        <p>{props.text}</p>
        <Icon icon="search" />
        <Icon icon="add" />
      </Div>
      <hr />
    </div>
  );
};

export default Divider;
