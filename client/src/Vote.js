import { useState } from "react";

export default function Vote(props) {
    
    const URL = props.url;
    const catId = props.id;
    const [votes, setVotes] = useState(props.votes);
    
    const updateVotes = (id) => {
        try{
            console.log(URL + `updateVotes/${id}`)
            fetch(URL + `updateVotes/${id}`);
            setVotes(votes + 1);
            console.log("updated!");
        } catch(err){
            console.log("Cat not found in the database");
        }
    }

    return ( 
        <div>
            <h4>Votes: {votes}</h4>
            <button onClick={() => updateVotes(catId)}>Vote me!</button>
        </div>
    );
}
