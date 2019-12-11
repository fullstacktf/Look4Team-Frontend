import * as React from "react";
import Icon from "../icon/Icon";
import "./Divider.css";
import styled from "@emotion/styled";

export interface DividerContainerProps {
  title: string;
}

const Divider: React.FC<DividerContainerProps> = props => {
  return (
    <Div>
      <div>
        <p>{props.title}</p>
        <Icon icon="search" />
        <Icon icon="add" />
      </div>
      <hr />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
`;
export default Divider;
