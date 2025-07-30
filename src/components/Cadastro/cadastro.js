import './cadastro.css';

export default function Cadastro(){
    
    
    return(
        <section>
             <div className="Prompt">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="email">Confirmar E-mail</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" />

                <label htmlFor="password">Confirmar Senha</label>
                <input type="password" id="password" name="password" />

                <button>
                    Cadastrar
                </button>
                <a href='/login'>Já tem uma conta ?</a>
            </div>
        </section>
    )
}