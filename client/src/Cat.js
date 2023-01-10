import { useEffect, useState } from "react";

export default function Cat({_id, name, age, location, votes, imgName}){
    
    //const img = "img/" + imgName;
    const [img, setImg] = useState([]);

    const options = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({Title: "React cat image request", id: _id})
    };

    const fetchImage = async () => {
        try{
            const res = await (await fetch(`http://localhost:8000/cat/images`, options)).text()
            setImg(res);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchImage();
    }, [])

    return (  
        <div className="m-2">
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>Location: {location}</h4>
            <img src = {img} alt = {name} className="catFrame" width = "400"/>
        </div>
    );
}
