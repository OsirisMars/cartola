import './login.css';

export default function Login(){
    
    
    return(
        <section>
             <div className="Prompt">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" />

                <button>
                    Login
                </button>
                <a href='/'>Cadastro</a>
            </div>
        </section>
    )
}