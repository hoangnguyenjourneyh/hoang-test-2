import styled from "styled-components";
import { themes } from "../../constant/themes";

export const Button = styled.button`
  background-color: ${(props) =>
    props.darkMode ? themes.darkMode.background : themes.lightMode.background};
  color: ${(props) =>
    props.darkMode ? themes.darkMode.color : themes.lightMode.color};
  border: none;
  border-radius: 4px;
  font-weight: 800;
  padding: 10px 20px;
`;