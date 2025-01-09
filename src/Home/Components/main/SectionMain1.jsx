import "./style/SectionM1.css";
import 'boxicons';
import InfoNav from "./data/SM1_InfoNav";
import Plantrip from "./data/SM1_PlanTrip";
const SectionMain1 = () =>{
    
    //navegador interno dentro de la sectionMain1
    const Nav = (nav) =>{
        return(
            <a href={nav.link}>{nav.name}</a>
        )
    };

    const Navlist = InfoNav.map( N => {
        return(
            <Nav link ={N.link} name = {N.name} />
        )
    })
    //Contenido que va dentro de los rectangulos Plan trip
    const SectionMain1_div2 = (SM1) =>{
        return(
            <div>
                    <h3>{SM1.place}</h3>
                    <p>Plan a trip<box-icon type='solid' name='right-arrow-alt'></box-icon></p>
            </div>
        )
    }

    const Plantriplist = Plantrip.map(P =>{
        return(
            <SectionMain1_div2 place = {P.place}/>
        )
    })

    return(
        <section className="SectionMain1">
            <nav>
                {Navlist}
            </nav>
            <div className="SectionMain1-div1">
                <div className="SM1-div1-div1" >
                <box-icon type='logo' name='instagram'></box-icon>
                <box-icon type='logo' name='facebook-circle'></box-icon>
                <box-icon name='twitter' type='logo' ></box-icon>
                </div>
                <div className="SM1-div1-div2">
                    <h1>Travel</h1>
                </div>
                <div className="SM1-div1-div3">
                    <button><span></span></button>
                    <button><span></span></button>
                    <button><span></span></button>
                </div>
            </div>
            <div className="SectionMain1-div2">
                <h2>plan your experience</h2>
            </div>
            <div className="SectionMain1-div3">
                {Plantriplist}
            </div>
        </section>
    )
};
export default SectionMain1;