import { User } from "@/pages/home/model"

export interface UserTableProps {
    users: User[]
}

export default function UserTable({ users }: UserTableProps) {
    return <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
                <td>City</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (<tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td><button style={{ color: 'orange' }}>edit</button></td>
                <td><button style={{ color: 'red' }}>delete</button></td>
            </tr>))}
        </tbody>
    </table>
}