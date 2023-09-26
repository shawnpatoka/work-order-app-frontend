import logoLightMode from "../img/workflow_logo_color.svg";
import logoDarkMode from "../img/workflow_logo_white.svg";
import { Link } from "react-router-dom";


function WorkFlowLogo({ useDarkMode }) {

  return (
    <>
      <Link to='/' style={{ margin: 0, paddingTop: '5px' }}>
        <img src={useDarkMode ? logoDarkMode : logoLightMode} style={{ width: '150px', height: 'auto', margin: 0 }} />
      </Link>
    </>
  )


}

export default WorkFlowLogo