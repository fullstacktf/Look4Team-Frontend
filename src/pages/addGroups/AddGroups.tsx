import * as React from "react";

import styled from "@emotion/styled";
import GroupForm from "../../components/groupForm/GroupForm";

const DIV = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`;
export interface AddGroupsProps {}

const AddGroups: React.FC = () => {
  return (
    <DIV>
      <GroupForm />
    </DIV>
  );
};

export default AddGroups;
