import { useForm, SubmitHandler } from "react-hook-form"

interface Inputs {
    name: string;
    username: string;
    email: string;
    city: string;
}

export default function UserForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("name")) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div><label>Name:</label>
            <input {...register("name", { required: true })}  />
            {errors.name && <div>This field is required</div>}
            </div>

            <div><label>Username:</label>
            <input {...register("name", { required: true })}  />
            {errors.name && <div>This field is required</div>}
            </div>

            <div><label>Email:</label>
            <input {...register("name", { required: true })}  />
            {errors.name && <div>This field is required</div>}
            </div>

            <div><label>City:</label>
            <input {...register("name", { required: true })}  />
            {errors.name && <div>This field is required</div>}
            </div>

            <button>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    )
}