import styled from "styled-components";
import { themes } from "../../constant/themes";

export const Container = styled.div`
  background-color: ${(props) =>
    props.darkMode
      ? themes.darkMode.containerBackground
      : themes.lightMode.containerBackground};
  color: ${(props) =>
    props.darkMode ? themes.darkMode.color : themes.lightMode.color};
  padding: 30px;
`;