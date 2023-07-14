import UserFormCard from "@/components/user-form-card/user-form-card";
import { User } from "@/store/users/model";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import { usersActions } from '../../store/users';

export default function Add() {
  const router = useRouter();
  const dispatch = useDispatch();

  const onCancel = () => {
    router.push("/home");
  };

  const onSubmit = (user: Omit<User, "id">) => {
    dispatch(usersActions.addUser({userData: {...user}}));
    router.push("/home");
  }

  return (
    <>
      <div><Link href="/home">Home</Link></div>
      <UserFormCard title="Add Form" onCancel={onCancel} onSubmit={onSubmit}/>
    </>
  )
}
