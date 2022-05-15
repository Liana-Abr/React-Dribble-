import React from "react";
import Card from "../../Card/Card";
import {CardData} from "../../Card/CardData";


function Shop(){
    return(
        <div>
            <div className="cards">
                {CardData.map((el, index)=>{
                    return(
                        <Card item={el}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop