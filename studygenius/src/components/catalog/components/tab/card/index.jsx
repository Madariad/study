import './style.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import themeSlice from '../../../../../store/theme/themeSlice';
import axiosConfig from "../../../../../axiosConfig";


// const response = useSelector((state) => state.courseList)
// console.log(response)
// ${course.id}
export default function card({description, name, id, img}) {
  const courseList = useSelector((state) => state.course.courseList);

  // console.log(courseList)
  // const dispatch = useDispatch
  // dispatch({type: 'GET_LESSONS'})
  const dispath = useDispatch()
  useEffect(() => {
    function ass() {

  dispath({type: 'GET_LESSONS'})
    }
    ass()
  }, [dispath])


  const lessons = useSelector((state) => state.lessons.lessonsList)
  console.log(lessons);

  return (
    
      // <div className="main">
      //   <ul className="cards">
      //     <li className="cards_item">
      //       <div className="card">
      //         <div className="card_image"><img src="../../../../../../public/img/react.png"/></div>
      //         <div className="card_content">
      //           <h2 className="card_title">Vue</h2>
      //           <p className="card_text">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      //           <p className="card_price">1999 ₸</p>
      //           <button className="btn card_btn">Купить</button>
      //         </div>
      //       </div>
      //     </li>
      //   </ul>
      // </div>
      <div className="main">
      <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
              <img src={img  === null ? "../../../../../public/img/react.png" :  `http://localhost:5000/api/v1/course/img/${img}`}/>
              </div>
              <Box className="card_content" sx={(theme) => ({ backgroundColor: theme.palette.cardColor.main })}>
                <h2 className="card_title">
                  {name}
                </h2>
                <p className="card_text">
                  {description}
                </p>
                {/* <p className="card_price">
                  1999 ₸
                </p> */}
                <Link to={`/${id}/course`} style={{textDecoration: 'none'}}>
                  <Box component='button' sx={(theme) => ({ backgroundColor: theme.palette.cardBtnColor.main })}  className="btn card_btn">Бесплатно</Box>
                </Link>
              </Box>
            </div>
          </li>
      </ul>
    </div>
    
  );
}
