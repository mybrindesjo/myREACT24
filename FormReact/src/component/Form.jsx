const Form = () => {
    const handeleCange = () => {
        console.log("a chage happend");
    };
    
    return (
        <form>
            <input placeholder="Name" onChange={handeleCange}></input>
            <input placeholder="Email" onChange={handeleCange}></input>
            <input placeholder="Password" onChange={handeleCange}></input>
            <button>Submit</button>
    
        </form>
    )
}