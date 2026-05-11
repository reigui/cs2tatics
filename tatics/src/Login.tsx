/*import { Link } from "react-router-dom";*/
import "./Login.css";

function Login() {
  return (
    <div className="container_login">
        <header className="left_login">
            <h1 className="Titulo">FAZER LOGIN</h1>

            <form className="Formulario">
                <label className="FormLabel">Email</label>
                <input type="email" />

                <label className="FormLabel">Senha</label>
                <input type="password" />

                <button type="submit" className="btn_entrar">
                    ENTRAR
                </button>
            </form>

            <div className="divider">
                <span>OU</span>
            </div>

        <button className="btn_criar_conta">CRIAR CONTA</button>

            <div className="social">
                <a href="#">DISCORD</a>
                <a href="#">GMAIL</a>
                <a href="#">INSTAGRAM</a>
            </div>

        </header>
        <main>
            {/* LADO DIREITO */}
            <div className="right_login">
                <h1>
                CS<span>2</span>TATICS
                </h1>
                <p>
                A PLATAFORMA PARA SEU APRENDIZADO NO COUNTER-STRIKE
                </p>

                <div className="image-box">
                <img src="/smoke.png" alt="smoke grenade" />
                </div>
            </div>
        </main>

        <footer>

        </footer>
  
    </div>
  )
}

export default Login;