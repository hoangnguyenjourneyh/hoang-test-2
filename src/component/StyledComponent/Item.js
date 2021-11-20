import styled from "styled-components";
import { themes } from "../../constant/themes";

export const Item = styled.li`
  background-color: ${(props) =>
    props.darkMode ? themes.darkMode.background : themes.lightMode.background};
  color: ${(props) =>
    props.darkMode ? themes.darkMode.color : themes.lightMode.color};
  padding: 10px 0;
  display: inline;
  border-radius: 4px;
  font-weight: 800;
  text-align: center;
`;