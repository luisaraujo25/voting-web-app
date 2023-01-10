import {useState, useEffect} from 'react';
import Cat from "./Cat";
import Vote from "./Vote";

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
                    return (
                        <div key={cat._id} >
                            <Cat {...cat}/>
                            <Vote votes={cat.votes} url = {URL} id = {cat._id}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
