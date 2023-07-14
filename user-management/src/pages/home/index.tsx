import { GetServerSideProps } from "next"
import UserTable from "@/components/user-table/user-table";
import styled from "styled-components";
import Card from "@/components/ui/card/card";
import { AddNewBtn } from "@/components/ui/buttons/add-new/add-new-btn";
import { useEffect, useState } from "react";
import DeleteUserModal from "@/components/delete-user-modal/delete-user-modal";
import { User } from "@/store/users/model";
import { useSelector, useDispatch } from 'react-redux'
import { usersActions } from "@/store/users";
import Link from 'next/link'
import { useRouter } from "next/router";
import getUsers from "../../../lib/users-source";

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
    const router = useRouter();
    const dispatch = useDispatch();

    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const { stateUsers } = useSelector(
        (state: any) => state.users
    );
 
    useEffect(() => {
        if (!stateUsers || stateUsers.length === 0) {
            dispatch(usersActions.loadUsers({ users }));
        }
    }, [dispatch, stateUsers, users]);



    const onOpenDeleteUserModal = (user: User) => {
        setUserToDelete(user);
    };

    const onCancelDeleteUserModal = () => {
        setUserToDelete(null);
    }

    const handleDeleteUser = (id: string) => {
        dispatch(usersActions.removeUser({ id }));
        setUserToDelete(null);
    };

    const onEdit = (id: string) => {
        router.push(`/edit/${id}`);
    }

    return (
        <>
            <div>Home</div>
            <div>
                <TableCard>
                    <Card>
                        <Header>
                            <span>User List</span>
                            <Link href="/add"><AddNewBtn>Add new</AddNewBtn></Link>

                        </Header>

                        <hr />
                        {(stateUsers && stateUsers.length > 0) && <TableContainer>
                            <UserTable users={stateUsers} onDelete={onOpenDeleteUserModal} onEdit={onEdit} />
                        </TableContainer>}
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