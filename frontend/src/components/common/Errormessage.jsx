function Errormessage({ message }){
    if(!message){
        return null;
    }

    return(
        <p className="error-message">
            {message}
        </p>
    );
}

export default Errormessage; 