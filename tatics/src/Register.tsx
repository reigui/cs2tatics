/*import { Link } from "react-router-dom";*/
import "./Register.css";

function Register() {
  return (
    <div className="container_Register">
        <header className="left_register">
            <h1 className="Titulo">CRIAR CONTA</h1>

            <form className="Formulario">
                <label className="FormLabel">Email</label>
                <input type="email" />

                <label className="FormLabel">Nome de Usuário</label>
                <input type="text" />

                <label className="FormLabel">Senha</label>
                <input type="password" />

                <label className="FormLabel">Confirmar Senha</label>
                <input type="password" />

                <button type="submit" className="btn_criar_conta">
                    CRIAR CONTA
                </button>
            </form>

            <div className="divider">
                <span>OU</span>
            </div>

        <button className="btn_entrar">ENTRAR</button>

            <div className="social">
                <a href="#">DISCORD</a>
                <a href="#">GMAIL</a>
                <a href="#">INSTAGRAM</a>
            </div>

        </header>
        <main>
            {/* LADO DIREITO */}
            <div className="right_register">
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

export default Register;