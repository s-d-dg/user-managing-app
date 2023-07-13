import UserFormCard from "@/components/user-form-card/user-form-card";
import { User } from "@/store/users/model";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Edit() {
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
      <UserFormCard title="Edit Form" onCancel={onCancel} onSubmit={onSubmit}/>
    </>
  )
}
