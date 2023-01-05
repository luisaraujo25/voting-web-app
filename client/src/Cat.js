export default function Cat({id, name, age, location, votes, imgName}){
    const img = "img/" + imgName
    return (  
        <div className="m-2">
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>Location: {location}</h4>
            <h4>Votes: {votes}</h4>
            <img src = {img} alt = {name} className="catFrame" width = "400"/>
        </div>
    );
}
