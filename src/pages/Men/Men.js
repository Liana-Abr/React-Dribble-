import React from "react";
import Card from "../../Card/Card";
import {CardData} from "../../Card/CardData";

function Men(){
    const filteredArr = CardData.filter( item=> item.category === 'men' )

    return(
        <div>
            <div className="cards">
                {filteredArr.map((el, index)=>{
                    return(
                        <Card item={el}/>
                    )
                })}
            </div>
        </div>

    )
}
export default Men