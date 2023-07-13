import styled from "styled-components";
import Card from "../ui/card/card";
import UserForm from "./user-form/user-form";
import { User } from "@/store/users/model";

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
    onCancel: () => void;
    onSubmit: (user: User) => void;
    user?: User;
}


export default function UserFormCard(props: UserFormCardProps) {
    const { title, onCancel, onSubmit, user } = props;
    return <FormCard>
        <Card>
            <FormTitle>{title}</FormTitle>
            <hr />
            <FormContainer>
            <UserForm onCancel={onCancel} onSubmit={onSubmit} user={user}/>
            </FormContainer>
        </Card>
    </FormCard>
}