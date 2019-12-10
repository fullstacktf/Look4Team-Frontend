import * as React from "react";
import Icon from "../icon/Icon";
import "./DividerContainer.css";

export interface DividerContainerProps {
  title: string;
}

const DividerContainer = ({ title }) => {
  return (
    <div>
      <div>
        <p>(title)</p>
        <Icon icon="search" />
        <Icon icon="add" />
      </div>
      <hr />
    </div>
  );
};

export default DividerContainer;
