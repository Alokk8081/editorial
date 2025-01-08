import Card from "./Card";
function Tours({tours=[]}){
    return(
        <div className="container">
            <div>
                <h2 className="title"> Our Team</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return<Card key={tour.id} {...tour}/>
                    })
                }
            </div>
        </div>
    );
}
export default Tours; 