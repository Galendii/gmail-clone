import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    overflow-x:hidden;
    overflow-y: hidden;
    margin:0;
    width:100vw;
    height: 100vh;
    font-family: 'Roboto','RobotoDraft',Helvetica,Arial,sans-serif;


}
::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 

}
 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    background:var(--outlined-hover);

}


:root{
    --primary: #fff;
    --red: #D93025;
    --dark-gray: #85888B;
    --black: #202124;
    --gray: #7E7E7E;
    --outlined: #F1F3F4;
    --blue: #1A73E8;
    --green: #188038;
    --outlined-hover: rgba(126, 126, 126,0.15);
    --red-hover:rgba(217, 48, 37,0.3)
}
`;

export default GlobalStyle;
