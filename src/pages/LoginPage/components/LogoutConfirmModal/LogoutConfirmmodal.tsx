import { Dispatch, SetStateAction } from "react";
import { Form, Modal, Text } from "../../../../components";
import { Flex } from "../../../../components/Flex";
import { getAuth, signOut } from "firebase/auth";

interface LogoutconfirmModalProps {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const LogoutconfirmModal = ({ useModal }: LogoutconfirmModalProps) => {
  const [isShow, setIsShow] = useModal;

  const handlerLogout = async () => {
    const auth = getAuth();
    try {
      const logoutData = await signOut(auth);
      console.log("Erro ao deslogar", logoutData);
    } catch (error) {
      console.log("Erro ao deslogar", error);
    }
  };

  return (
    <Modal.Container $isshow={isShow.toString()}>
      <Modal.Background onClick={() => setIsShow(false)} />
      <Modal.Content $isshow={isShow.toString()}>
        <Modal.Button onClick={() => setIsShow(false)}>x</Modal.Button>
        <Text.Paragraph>Realmente deseja sair?</Text.Paragraph>
        <Flex>
          <Form.Button onClick={handlerLogout}>Sim</Form.Button>
          <Form.Button onClick={() => setIsShow(false)}>Näo</Form.Button>
        </Flex>
      </Modal.Content>
    </Modal.Container>
  );
};
