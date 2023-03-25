import React, { useState, useEffect } from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


export default function Index() {
    const [value, setValue] = useState("all");
    const [checkedImages, ifCheckedImages] = useState([]);

    useEffect(() => {
        value === "all" ? ifCheckedImages(images) : ifCheckedImages(images.filter(image => image.value === value));
    }, [value]
    ) 



// const images = [
//     { id: "1", imageName: finish1, value: "miscellaneous" },
//     { id: "2", imageName: finish2, value: "kitchen" },
//     { id: "3", imageName: finish3, value: "kitchen" },
//     { id: "4", imageName: finish4, value: "bathroom" },
//     { id: "5", imageName: finish5, value: "bathroom" },
//     { id: "6", imageName: finish6, value: "miscellaneous" },
//     { id: "7", imageName: finish7, value: "miscellaneous" },
//     { id: "8", imageName: finish8, value: "kitchen" },
//     { id: "9", imageName: finish9, value: "kitchen" },
//     { id: "10", imageName: finish10, value: "miscellaneous" },
//     { id: "11", imageName: finish11, value: "miscellaneous" },
//     { id: "12", imageName: finish12, value: "bathroom" },
//     { id: "13", imageName: finish13, value: "bathroom" },
//     { id: "14", imageName: finish14, value: "bathroom" },
//     { id: "15", imageName: finish15, value: "bathroom" },
//     { id: "16", imageName: finish16, value: "bathroom" },
//     { id: "17", imageName: finish17, value: "bathroom" },
//     { id: "18", imageName: finish18, value: "bathroom" },
//     { id: "19", imageName: finish19, value: "bathroom" },
//     { id: "20", imageName: finish20, value: "miscellaneous" },
//     { id: "21", imageName: finish21, value: "miscellaneous" },
//     { id: "22", imageName: finish22, value: "miscellaneous" },
//     { id: "23", imageName: finish23, value: "bathroom" },
//     { id: "24", imageName: finish24, value: "kitchen" },
//     { id: "25", imageName: finish25, value: "kitchen" },
//     { id: "26", imageName: finish26, value: "miscellaneous" },
//     { id: "27", imageName: finish27, value: "kitchen" },
//     { id: "28", imageName: finish28, value: "bathroom" },
//     { id: "29", imageName: finish29, value: "bathroom" }
    
// ];



            {/* <div className="checklist">
                <ValueButton name="all" valueName={value === "all" ? true : false} handleValue={setValue} /> 
                <ValueButton className="misc" name="miscellaneous" valueName={value === "miscellaneous" ? true : false} handleValue={setValue} />
                <ValueButton name="kitchen" valueName={value === "kitchen" ? true : false} handleValue={setValue} />
                <ValueButton name="bathroom" valueName={value === "bathroom" ? true : false} handleValue={setValue} />
            </div>

            <div className="container row">
                {checkedImages.map(image => (
                    <div className="column" key={image.id}>
                        <a href={image.imageName}>
                        <img className="images" src={image.imageName}/>
                        </a>
                    </div>
                ))}
            </div> */}
            /* <input type={"checkbox"} onClick={checkedBox}
            // className={checked ? "none" : null}
            value="Bathrooms"></input>
            <label for="bathroom">Bathroom</label> */

            // const ValueButton = ({ name, handleValue, valueName}) => {
            //     return (
            //         <button className={`value ${valueName ? "activeimage" : null}`} onClick={() => handleValue(name)}>
            //             {name.toUpperCase()}
            //         </button>
            //     );
            // };

        }