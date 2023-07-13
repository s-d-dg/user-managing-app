import UserFormCard from "@/components/user-form-card/user-form-card";
import { User } from "@/store/users/model";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Add() {
  const router = useRouter();

  const onCancel = () => {
    router.push("/home");
  };

  const onSubmit = (user: User) => {
    console.log('User ', user);
  }

  return (
    <>
      <div><Link href="/home">Home</Link></div>
      <UserFormCard title="Add Form" onCancel={onCancel} onSubmit={onSubmit}/>
    </>
  )
}
