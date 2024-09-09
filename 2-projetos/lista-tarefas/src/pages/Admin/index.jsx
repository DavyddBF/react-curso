import { signOut } from 'firebase/auth';
import './admin.css';   
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();
    
    async function logOut() {
        await signOut(auth)
        .then(
            navigate('/', { replace: true })
        );
    }

    return (
        <div>
            <header className='adm-header'>
                <div>
                    <h1><Link to='/'>Dashboard</Link></h1>
                    <button onClick={ logOut }>
                        LogOut
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Admin;