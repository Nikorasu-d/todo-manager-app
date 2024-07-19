export default function Todo({documento, fetchDeleteTodo, fetchChangeTodoState}){
    
    const {_id ,title, completed} = documento

    return(
    <>
        <li>
            <div className="todo row">
                <div className="col-1 mb-auto mt-auto d-flex justify-content-center">
                    <button type="button" className="rm-button" onClick={()=> fetchDeleteTodo(_id)}>
                        REMOVE
                    </button>
                </div>
                <div className="col-11">
                    <div className="panel row">
                        <div className="col-3 mb-auto mt-auto">
                            <p>
                                {_id}
                            </p>
                        </div>
                        <div className="col-7 mb-auto mt-auto">
                            <p style={{textAlign : 'end'}}>
                                {title}
                            </p>
                        </div>
                        <div className="col-2 mb-auto mt-auto">
                            <p>
                                {!completed? 
                                    <div className="mb-auto mt-auto d-flex justify-content-center">
                                        <button type="button" className="rm-button" onClick={()=> fetchChangeTodoState(documento)}>
                                            NOT COMPLETED
                                        </button>
                                    </div>
                                : 
                                    <div className="mb-auto mt-auto d-flex justify-content-center">
                                        <button type="button" className="complete-button" onClick={() => fetchChangeTodoState(documento)}>
                                            COMPLETED
                                        </button>
                                    </div>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </>
    )
}