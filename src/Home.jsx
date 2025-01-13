import boxicons from "boxicons";
import SectionMain1 from "./Home/Components/main/SectionMain1";
import SectionMain2 from "./Home/Components/main/SectionMain2";
import SectionMain3 from "./Home/Components/main/SectionMain3";
import SectionMain4 from "./Home/Components/main/SectionMain4";
import SectionMain5 from "./Home/Components/main/SectionMain5";
import SectionMain6 from "./Home/Components/main/SectionMain6";
import SectionFooter1 from "./Home/Components/footer/SectionFooter1";
const Home = () =>{
    return(
        <section>
            <header>

            </header>
            <main>
                <SectionMain1/>
                <SectionMain2/>
                <SectionMain3/>
                <SectionMain4/>
                <SectionMain5/>
                <SectionMain6/>
            </main>
            <footer>
                <SectionFooter1/>
            </footer>
        </section>
    )
};
export default Home;