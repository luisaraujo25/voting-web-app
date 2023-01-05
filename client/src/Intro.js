import {useState, useEffect} from 'react';


export default function Intro() {

    const [data, setData] = useState(null);
    
    useEffect = ( () => {
        
        fetch("http://localhost:8000/")
        .then((res) =>{
            return res.json();
        })
        .then(res => {
            console.log(":///");
            setData(res);
        })
    }, [])

    fetch("http://localhost:8000/")
        .then((res) =>{
            return res.json();
        })
        .then(res => {
            setData(res);
        })

    return (
        <div className="m-5">
            <h3>Welcome!</h3>
            {data && <div>{data}</div>}
            <div className="catsDisplay d-flex justify-content-center mt-5">
                <img className="m-2 catFrame" src="img/cat1.jpg" width="400"/>
                <img className="m-2 catFrame" src="img/cat2.jpg" width="400"/>
                <img className="m-2 catFrame" src="img/cat3.jpg" width="400"/>
            </div>
        </div>
    );
}
