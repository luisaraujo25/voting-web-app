export default function Intro() {
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
