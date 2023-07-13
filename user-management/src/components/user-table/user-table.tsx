import { User } from "@/pages/home/model"
import { styled } from "styled-components"
import { EditBtn } from "../ui/buttons/edit/edit-btn"
import { DeleteBtn } from "../ui/buttons/delete/delete-btn"

export interface UserTableProps {
    users: User[];
    onOpenDeleteModal: (user: User) => void;
}

const Table = styled.table`
border: 2px solid #9d9b9b;
width: 100%;
border-collapse: collapse; 
`
const Row = styled.tr`
    border-bottom: 2px solid #d0d0d0;
`

const HeaderRow = styled(Row)`
    background-color: #d0d0d0;
`

const Cell = styled.td`
    padding: 10px;
`

export default function UserTable({ users, onOpenDeleteModal }: UserTableProps) {
    return <Table>
        <thead>
            <HeaderRow>
                <Cell>Id</Cell>
                <Cell>Name</Cell>
                <Cell>Username</Cell>
                <Cell>Email</Cell>
                <Cell>City</Cell>
                <Cell>Edit</Cell>
                <Cell>Delete</Cell>
            </HeaderRow>
        </thead>
        <tbody>
            {users.map(user => (<Row key={user.id}>
                <Cell>{user.id}</Cell>
                <Cell>{user.name}</Cell>
                <Cell>{user.username}</Cell>
                <Cell>{user.email}</Cell>
                <Cell>{user.city}</Cell>
                <Cell><EditBtn>edit</EditBtn></Cell>
                <Cell><DeleteBtn onClick={() => onOpenDeleteModal(user)}>delete</DeleteBtn></Cell>
            </Row>))}
        </tbody>
    </Table>
}