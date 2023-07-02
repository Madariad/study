import { useParams } from "react-router-dom";
import Navigate from "./navigate/index";
function subLesson({params}) {
    // const params = useParams()
    console.log(params);
    return (
        <>
        <Navigate />
          <div className="">subLesson</div>
        </>
    )
}

export default subLesson