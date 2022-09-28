import { useParams } from "react-router-dom";
import GridPage from "../components/GridPage";

function Clase(props) {
    let params = useParams();
    return ( <GridPage>
        <h1>Nombre de la clase {params.claseId}</h1>
    </GridPage> );
}

export default Clase;