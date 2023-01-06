import * as yup from "yup";

const SchemaRegister = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    last_name: yup.string().required("Sobrenome obrigatório"),

    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Senha Obrigatoria"),
    age: yup.string().required("idade Obrigatória"),
    profession: yup.string().required("Profissao Obrigatória"),
    genre: yup.string().required("genero Obrigatório"),
  });
  export default SchemaRegister