import {useState, useEffect} from 'react';

export default function Intro() {

    const [loading, setLoading] = useState(true);
    const [cats, setCats] = useState([]);

    //const URL = "http://localhost:8000/" 
    const URL = "https://course-api.com/react-tours-project";

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

    useEffect = (() => {
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
                <img className="m-2 catFrame" src="img/cat1.jpg" width="400"/>
                <img className="m-2 catFrame" src="img/cat2.jpg" width="400"/>
                <img className="m-2 catFrame" src="img/cat3.jpg" width="400"/>
            </div>
        </div>
    );
}
