import { CancelBtn } from "@/components/ui/buttons/cancel/cancel-btn";
import { SubmitBtn } from "@/components/ui/buttons/submit/submit-btn";
import { FormInput } from "@/components/ui/input/form-input";
import { useForm, SubmitHandler } from "react-hook-form"
import { styled } from "styled-components";

interface Inputs {
    name: string;
    username: string;
    email: string;
    city: string;
}

const FormLabel = styled.label`
    color: black;
    font-size: 16px;
    font-weight: 600;
    margin: auto 20px auto 0;
    `;

const FormRow = styled.div`
    display: flex;
    `;

const ButtonsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
`

const CancelBtnContainer = styled(CancelBtn)`
    margin-right: 10px;
`;

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

            <FormRow>
                <FormLabel>Name:</FormLabel>
                <FormInput {...register("name", { required: true })} />
                {errors.name && <div>This field is required</div>}
            </FormRow>

            <FormRow>
                <FormLabel>Username:</FormLabel>
                <FormInput {...register("name", { required: true })} />
                {errors.name && <div>This field is required</div>}
            </FormRow>

            <FormRow>
                <FormLabel>Email:</FormLabel>
                <FormInput {...register("name", { required: true })} />
                {errors.name && <div>This field is required</div>}
            </FormRow>

            <FormRow>
                <FormLabel>City:</FormLabel>
                <FormInput {...register("name", { required: true })} />
                {errors.name && <div>This field is required</div>}
            </FormRow>

            <ButtonsContainer>
                <CancelBtnContainer>Cancel</CancelBtnContainer>
                <SubmitBtn type="submit">Submit</SubmitBtn>
            </ButtonsContainer>
        </form>
    )
}