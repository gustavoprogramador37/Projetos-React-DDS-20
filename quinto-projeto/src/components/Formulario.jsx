import styles from "./Formulario.module.css";
import { useForm } from "react-hook-form";
const Formulario = () => {
  const {
    // register = cria um objetivo para ser enviado depois
    register,
    // handleSubmit = lida com o envio do formulario
    handleSubmit,
    // errors = objeto com erros de validação no formulario
    formState: { errors },
    //watch = observa o valor de um input
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados preenchidos:", data);
  };

  const onError = (errors) => {
    console.log("Erros", errors);
  };

  return (
    <div>
      <h1>Formulário</h1>
      <form className={styles.formulario} onSubmit={handleSubmit(onSubmit, onError)}>
        {/* CAIXINHA DE NOME */}
        <label>
          <span>Nome:</span>
          <input type="text" id="nome" placeholder="Nome Completo"{...register("nome",{
              required : "O campo nome é obrigatório",
              minLength :{
              value : 2,
              message : "O mínino de caracteres é 2",
              },
              maxLength:{
              value: 8,
              message: "o máximo de caracteres é 8",  
              },
              pattern :{
              value : /^[A-Za-z\s]+$/i,
              message : "O nome só pode conter letras"
              }
          })}/>
        </label> 

        {errors.nome && <p className={styles.error}>{errors.nome.message}</p>}
        



        {/* CAIXINHA DE EMAIL */}
        <label>
         <span>Email</span>
         <input 
         type="email" 
         name="email"
         placeholder="Digite seu email"
         {...register("email", {
          required: "O campo email é obrigatório",
          pattern : {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0.-]+\.[A-Za-z]{2,}$/,
            message: "Email inválido"
          },
          validate: (value) => value.includes("@") || "Email é inválido"
         })}
         />   
        </label>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

         <label>
          <span>Nome:</span>
          <input type="text" id="nome" placeholder="Nome Completo"{...register("nome",{
              required : "O campo nome é obrigatório",
              minLength :{
              value : 2,
              message : "O mínino de caracteres é 2",
              },
              maxLength:{
              value: 8,
              message: "o máximo de caracteres é 8",  
              },
              pattern :{
              value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%?&])[A-Za-Z\d@$!%*?&]{8,}$/,
              message : "O nome só pode conter letras"
              }
          })}/>
        </label> 




        {/* BOTÃO PRA ENVIO */}

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            borderColor: "black",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
