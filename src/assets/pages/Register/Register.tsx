import { Link } from 'react-router-dom';
import './Register.css';

export const Register: React.FC = () => {
    return (
        <>
            <div className="container">
                <form>
                    <div className="name_last_name">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Last Name" />
                    </div><br />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <br />
                    <input type="password" name="Rpassword" id="Rpassword" placeholder="Repeat password" />
                    <br />

                    <button type="button">Create account</button>

                    <span className="login">
                        <span>Already has an account?</span>
                        <Link to="/login">Entrar</Link>
                    </span>
                </form>
            </div>
        </>
    );
};
