import { GetServerSideProps } from "next"
import { User, getUsers } from "./model"
import UserTable from "@/components/user-table";
import styled from "styled-components";

export interface HomeProps {
    users: User[]
}

export const Header = styled.div`
background-color: red;
`;

export default function Home({ users }: HomeProps) {


    return (
        <>
            <div >Home</div>
            <div>
                <Header>User List</Header>
                <UserTable users={users} />
            </div>
        </>
    )
}


export const getServerSideProps: GetServerSideProps<{ users: User[] }> = async () => {
    const users = getUsers();
    return { props: { users } };
}