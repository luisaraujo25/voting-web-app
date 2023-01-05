import {useState, useEffect} from 'react';
import Cat from "./Cat";

export default function Intro() {

    const [loading, setLoading] = useState(true);
    const [cats, setCats] = useState([]);

    const URL = "http://localhost:8000/" 

    const fetchCats = async () => {
        setLoading(true);
        try{
            const cats = await (await fetch(URL)).json();
            setLoading(false);
            setCats(cats);
            console.log(cats);
        } catch(error){
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCats();
    }, [])

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }

    return (
        <div className="m-5">
            <h3>Welcome!</h3>
            <div className="catsDisplay d-flex justify-content-center mt-5">
                {cats.map( cat => {
                    return <Cat key={cat._id} {...cat}/>
                })}
            </div>
        </div>
    );
}
