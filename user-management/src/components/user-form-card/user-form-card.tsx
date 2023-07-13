import styled from "styled-components";
import Card from "../ui/card/card";
import UserForm from "./user-form/user-form";

const FormCard = styled.div`
    width: 40vw;
    margin: auto;
`;

const FormTitle = styled.div`
    padding: 20px 20px 10px 20px;
    font-size: 26px;
    font-weight: 800;
`;

const FormContainer = styled.div`
    padding: 20px;
`

export interface UserFormCardProps {
    title: string;
}


export default function UserFormCard(props: UserFormCardProps) {
    return <FormCard>
        <Card>
            <FormTitle>{props.title}</FormTitle>
            <hr />
            <FormContainer>
            <UserForm />
            </FormContainer>
        </Card>
    </FormCard>
}