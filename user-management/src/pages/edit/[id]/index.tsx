import UserFormCard from "@/components/user-form-card/user-form-card";
import { User } from "@/store/users/model";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from '../../../store/users';

export default function Edit() {
  const router = useRouter();
  const dispatch = useDispatch();

  const id = router.query.id;

  const editUser = useSelector(
    (state: any) => {
      const users = state.users.stateUsers as User[];

      return users.find(user => user.id === id);
    }
);

  const onCancel = () => {
    router.push("/home");
  };

  const onSubmit = (user: Omit<User, "id">) => {
    dispatch(usersActions.editUser({userData: {id, ...user}}));
    router.push("/home");
  }

  return (
    <>
      <div><Link href="/home">Home</Link></div>
      <UserFormCard title="Edit Form" user={editUser} onCancel={onCancel} onSubmit={onSubmit}/>
    </>
  )
}
