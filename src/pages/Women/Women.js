import React from "react";
import {CardData} from "../../Card/CardData";
import Card from "../../Card/Card";


function Women(){
    const filteredArr = CardData.filter( item=> item.category === 'women' )

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
export default Women