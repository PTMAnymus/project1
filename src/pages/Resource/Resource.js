import "./index.scss"

function Resource() {
    return ( 
        <>
            <h1>FPT Telecom</h1>
            <div className="container-resource">
                <div className="resource">
                    <header className="resource__header">RESOURCE</header>
                    <div className="resource__actions">
                        <input type="text" className="resource__actions__input" placeholder="Search ..." />
                        <div className="resource__actions__button">
                            <div></div>
                            <span>Create resource</span>
                        </div>
                    </div>

                    <div className="resource__table">
                        <div className="resource__table__header">
                            <div style={{"width": "60px", "textAlign": "center"}}>
                                <p></p>
                            </div>
                            <div style={{"width": "60%"}}>
                                <p>Resource</p>
                            </div>
                            <div style={{"width": "30%"}}>
                                <p>Description</p>
                            </div>
                            <div style={{"width": "60px"}}>
                                <p>Actions</p>
                            </div>
                        </div>
                        <div className="resource__table__content">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Resource;