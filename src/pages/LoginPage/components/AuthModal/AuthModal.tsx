import { Dispatch, FormEventHandler, SetStateAction, useState } from "react";
import { Form, Modal } from "../../../../components";
import { z } from "zod";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ReactLoading from "react-loading";

const userSchema = z.object({
  email: z.string().email(), // Valida email com formato correto
  passowrd: z.string().min(8).max(32), // Valida senha com tamanho entre 8 e 32 caracteres
});

interface AuthModalProps {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const AuthModal = ({ useModal }: AuthModalProps) => {
  const [isShow, setIsShow] = useModal;
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const updateFormValueByProp = <T extends keyof typeof formValues>(
    formValuePropName: T,
    updateValue: (typeof formValues)[T]
  ) => {
    setFormValues((prevState) => {
      return { ...prevState, [formValuePropName]: updateValue };
    });
  };

  const handleLogin: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const validationResult = userSchema.safeParse(formValues);
    if (validationResult.error) {
      console.log("valores invalidos", validationResult.error);
      return;
    }
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      console.log("Usuário logado:", userCredential.user);
    } catch (error) {
      console.error("Erro no login:", error);
    }
    setIsLoading(false);
  };
  return (
    <Modal.Container $isshow={isShow.toString()}>
      <Modal.Background onClick={() => setIsShow(false)} />
      <Modal.Content $isshow={isShow.toString()}>
        <Modal.Button onClick={() => setIsShow(false)}>x</Modal.Button>
        <Form.Container onSubmit={handleLogin}>
          <Form.label>
            Login:
            <Form.Input
              type="email"
              onChange={(event) =>
                updateFormValueByProp("email", event.target.value)
              }
            />
          </Form.label>
          <Form.label>
            Senha:
            <Form.Input
              type="password"
              onChange={(event) =>
                updateFormValueByProp("password", event.target.value)
              }
            />
          </Form.label>
          <Form.Button type="submit">
            {isLoading ? (
              <ReactLoading type="spin" width={10} height={10} />
            ) : (
              "Enviar"
            )}
          </Form.Button>
        </Form.Container>
      </Modal.Content>
    </Modal.Container>
  );
};
