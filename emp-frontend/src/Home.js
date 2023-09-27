import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import AppNavbar from "./AppNavbar";
export default function Home(){
    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <Button color="link"><Link to="/employees">Employees</Link></Button>
            </Container>
        </div>
    );
    

}
