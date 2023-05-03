import { Link } from 'react-router-dom';
import './Login.css';

export const Login: React.FC = () => {
    return (
        <>
            <div className="container">
                <form>
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <br />

                    <button className='btn_login' type="button">Login</button>

                    <span className="forget_create">
                        <span>Forgot your passoword?</span>

                        <Link to="/register">Create account</Link>
                    </span>
                </form>
            </div>
        </>
    );
};
