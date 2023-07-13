import styled from "styled-components";
import Modal from "../modal/modal";
import { DeleteBtn } from "../ui/buttons/delete/delete-btn";
import { CancelModalBtn } from "../ui/buttons/cancel-modal/cancel-modal-btn";

export interface DeleteUserModalProps {
    id: string;
    name: string
    onCancel: () => void;
    onDelete: (id: string) => void;
}

const ModalBody = styled.div`
width: 25vw;
`

const Title = styled.div`
    padding: 20px 20px 10px 20px;
    font-size: 26px;
    font-weight: 800;
`;

const Body = styled.div`
    padding: 20px;
    font-size: 14px;
`

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
`;

const DeleteBtnContainer = styled(DeleteBtn)`
margin-left: 10px;
padding: 2px 20px;
`

export default function DeleteUserModal({ id, name, onCancel, onDelete }: DeleteUserModalProps) {

    return <Modal>
        <ModalBody>
            <Title>Delete</Title>
            <hr />
            <Body>Do you want to delete user: {name}?</Body>
            <hr />
            <Footer>
                <CancelModalBtn onClick={() => onCancel()}>Cancel</CancelModalBtn>
                <DeleteBtnContainer onClick={() => onDelete(id)}>Delete</DeleteBtnContainer>
            </Footer>
        </ModalBody>
    </Modal>
}