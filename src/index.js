import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <h2>Dados Pessoais</h2>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Nome</label>
      <input  {...register("nome", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}


      <label>CPF</label>
      <input type="number"{...register("cpf", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}

      <header>Sexo</header>
      <label htmlFor="field-feminino">
        <input
          {...register("Feminino")}
          type="radio"
          name="Feminino"
          value="Feminino"
          id="field-rain"
        />
        Feminino
      </label>
      <label htmlFor="field-wind">
        <input
          {...register("wind")}
          type="radio"
          name="weather"
          value="Masculino"
          id="field-wind"
        />
        Masculino
      </label>
      <label>Data de Nascimento</label>
      <input  {...register("data", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}

      <label>Estado Civil</label>
      <select>
        <option value="Solteiro">Solteiro</option>
        <option value="Casado">Casado</option>
        <option value="Divorciado">Divorciado</option>
        <option value="Viuvo">Viuvo</option>
      </select>

      <h2>Dados de contato</h2>
      <label>CEP</label>
      <input  {...register("nome", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}
      <label>Endereço</label>
      <input  {...register("nome", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}
      <label>Bairro</label>
      <input  {...register("nome", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}
      <label>Cidade</label>
      <input  {...register("nome", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}
      <label>UF</label>
      <select>
        <option value="AC">AC</option>
        <option value="AL">AL</option>
        <option value="AP">AP</option>
        <option value="AM">AM</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="DF">DF</option>
        <option value="ES">ES</option>
        <option value="GO">GO</option>
        <option value="MA">MA</option>
        <option value="MS">MS</option>
        <option value="MT">MT</option>
        <option value="MG">MG</option>
        <option value="PA">PA</option>
        <option value="PB">PB</option>
        <option value="PR">PR</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="RJ">RJ</option>
        <option value="RN">RN</option>
        <option value="RS">RS</option>
        <option value="RO">RO</option>
        <option value="RR">RR</option>
        <option value="SC">SC</option>
        <option value="SP">SP</option>
        <option value="SE">SE</option>
        <option value="TO">TO</option>
      </select>

      <h2>Dados de cadastro</h2>

      <label>Celular</label>
      <input  {...register("nome", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}
      <label>Login</label>
      <input  {...register("nome", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}
      <label>Senha</label>
      <input type="password"  {...register("nome", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}

      <h2>Deseja receber informações sobre os seguintes assuntos abaixo:</h2>

      <div className='mx-auto justify-center p-32 flex'></div>
      <div className='p-2'>
          <label htmlFor=''>January</label>
          <input
            type='checkbox'
            placeholder='January'
            {...register('January', {})}
            className='mx-3'
            
          />
        </div>
        <div className='p-2'>
          <label htmlFor=''>February</label>
          <input
            type='checkbox'
            placeholder='February'
            {...register('February', {})}
            className='mx-3'
          />
        </div>


      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
