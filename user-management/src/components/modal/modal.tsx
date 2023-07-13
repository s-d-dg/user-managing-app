import ReactDOM from 'react-dom';
import styled from "styled-components";
import Card from "../ui/card/card";

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: center;
    background-color: rgba(0,0,0,0.8);
    `;

const ModalContainer = styled(Card)`
    z-index: 100;
`;

export interface ModalProps {
    children?: React.ReactNode;
}


export default function Modal({ children }: ModalProps) {
    const modalNode = document.getElementById("modal-root");
    if (modalNode !== null) {
        return ReactDOM.createPortal(
            (<Overlay>
                <ModalContainer>
                    {children}
                </ModalContainer>
            </Overlay>),
            modalNode
        );
    }

    return null;
}
