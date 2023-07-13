import { GetServerSideProps } from "next"
import { User, getUsers } from "./model"
import UserTable from "@/components/user-table/user-table";
import styled from "styled-components";
import Card from "@/components/ui/card/card";
import { AddNewBtn } from "@/components/ui/buttons/add-new/add-new-btn";
import Modal from "@/components/modal/modal";
import { useState } from "react";
import DeleteUserModal from "@/components/delete-user-modal/delete-user-modal";

export interface HomeProps {
    users: User[]
}

export const Header = styled.div`
    padding: 20px 20px 10px 20px;
    font-size: 26px;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    `;

const TableCard = styled.div`
    width: 90vw;
    margin: auto;
`;

const TableContainer = styled.div`
    padding: 0 10px 10px 10px;
`

export default function Home({ users }: HomeProps) {

    const [userToDelete, setUserToDelete] = useState<User | null>(null);

    const onOpenDeleteUserModal = (user: User) => {
        setUserToDelete(user);
    };

    const onCancelDeleteUserModal = () => {
        console.log('on cancel');
        setUserToDelete(null);
    }

    const handleDeleteUser = (id: string) => {
        alert(`User with id: ${id} was deleted !`);
        setUserToDelete(null);
    };

    return (
        <>
            <div >Home</div>
            <div>
                <TableCard>
                    <Card>
                        <Header>
                            <span>User List</span>
                            <AddNewBtn>Add new</AddNewBtn>
                        </Header>

                        <hr />
                        <TableContainer>
                            <UserTable users={users} onOpenDeleteModal={onOpenDeleteUserModal} />
                        </TableContainer>
                    </Card>
                </TableCard>
            </div>
            {userToDelete !== null && <DeleteUserModal
                id={userToDelete.id}
                name={userToDelete.name}
                onDelete={handleDeleteUser}
                onCancel={onCancelDeleteUserModal}
            />}
        </>
    )
}


export const getServerSideProps: GetServerSideProps<{ users: User[] }> = async () => {
    const users = getUsers();
    return { props: { users } };
}