export default function Vote(props) {
    
    const URL = props.url;
    const catId = props.id;
    
    const updateVotes = (id) => {
        try{
            console.log(URL + `updateVotes/${id}`)
            fetch(URL + `updateVotes/${id}`);
            console.log("updated!");
        } catch(err){
            console.log("Cat not found in the database");
        }
    }

    return ( 
        <button onClick={() => updateVotes(catId)}>Vote me!</button>
    );
}
