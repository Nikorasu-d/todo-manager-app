export default function Sidebar({fetchGetAll,setIsFetching}){


    return(
    <>
        <nav className="col-2 sidebar">
            <div className="row">
                <ul>
                    <li>
                        <button type="button" onClick={() =>{ 
                            setIsFetching(true)
                            fetchGetAll()
                            } 
                        }>
                            REFRESH <b>TO DO</b>
                        </button>
                    </li>
                </ul>
                <div className="logo">
                    <h2>TODO</h2>
                    <h2>MANAGER</h2>
                </div>
            </div>
        </nav>
    </>
    )
}