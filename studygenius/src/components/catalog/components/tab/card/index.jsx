import './style.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


// const response = useSelector((state) => state.courseList)
// console.log(response)
// ${course.id}
export default function card({description, name, id}) {
  const courseList = useSelector((state) => state.course.courseList);
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
              <img src="../../../../../../public/img/react.png"/>
              </div>
              <div className="card_content">
                <h2 className="card_title">
                  {name}
                </h2>
                <p className="card_text">
                  {description}
                </p>
                {/* <p className="card_price">
                  1999 ₸
                </p> */}
                <Link to={`/${id}`} style={{textDecoration: 'none'}}>
                  <button className="btn card_btn">Бесплатно</button>
                </Link>
              </div>
            </div>
          </li>
      </ul>
    </div>
    
  );
}
