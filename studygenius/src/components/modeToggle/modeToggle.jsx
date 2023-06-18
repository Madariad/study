import "./style.css";


import { toggleTheme } from "../../store/theme/themeSlice";

import { useDispatch } from "react-redux";
function modeToggle() {
    
    const dispatch = useDispatch()

    const handleMode = () => {
      dispatch(toggleTheme())
      console.log('handleMode');
    };



    return (
        <> 
         <label  className="switch">
            <input type="checkbox" onClick={handleMode} />
            <span className="slider"></span>
        </label>
        </>
    )
}

export default modeToggle