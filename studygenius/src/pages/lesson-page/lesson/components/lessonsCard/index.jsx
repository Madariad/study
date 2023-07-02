import "./style.css";
function lessonCard({title, subtitle}) {
    return (
        <>
         <div class="cardY">
    <div class="card__wrapperY">
        <div class="card___wrapper-acountsY">
            <div class="card__scoreY">+3</div>
           
            
        </div>
        <div class="card__menuY"><svg xmlns="http://www.w3.org/2000/svg" width="4" viewBox="0 0 4 20" height="20" fill="none"><g fill="#000"><path d="m2 4c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"></path><path d="m2 12c1.10457 0 2-.8954 2-2 0-1.10457-.89543-2-2-2s-2 .89543-2 2c0 1.1046.89543 2 2 2z"></path><path d="m2 20c1.10457 0 2-.8954 2-2s-.89543-2-2-2-2 .8954-2 2 .89543 2 2 2z"></path></g></svg></div>
    </div>
    <div class="card__titleY">{title}</div>
    <div class="card__subtitleY">{subtitle}</div>
    <div class="card__indicatorY"><span class="card__indicator-amountY">135</span> Works / <span class="card__indicator-percentageY">45%</span></div>
    <div class="card__progressY"><progress max="100" value="40"></progress></div>
</div>
        
        </>
    )
}

export default lessonCard