import { CancelBtn } from "@/components/ui/buttons/cancel-form/cancel-btn";
import { SubmitBtn } from "@/components/ui/buttons/submit/submit-btn";
import { FormInput } from "@/components/ui/input/form-input";
import { User } from "@/store/users/model";
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

export interface UserFormProps {
    user?: User;
    onCancel: () => void;
    onSubmit: (user: Omit<User, "id">) => void;
}

export default function UserForm({ user, onCancel, onSubmit }: UserFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmitForm: SubmitHandler<Inputs> = (data) => {
        onSubmit({ ...data });
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>

            <FormRow>
                <FormLabel>Name:</FormLabel>
                <FormInput {...register("name", { value: user ? user.name : "", required: true })} />
                {errors.name && <div>This field is required</div>}
            </FormRow>

            <FormRow>
                <FormLabel>Username:</FormLabel>
                <FormInput {...register("username", { value: user ? user.username : "", required: true })} />
                {errors.username && <div>This field is required</div>}
            </FormRow>

            <FormRow>
                <FormLabel>Email:</FormLabel>
                <FormInput {...register("email", { value: user ? user.email : "", required: true })} />
                {errors.email && <div>This field is required</div>}
            </FormRow>

            <FormRow>
                <FormLabel>City:</FormLabel>
                <FormInput {...register("city", { value: user ? user.city : "", required: true })} />
                {errors.city && <div>This field is required</div>}
            </FormRow>

            <ButtonsContainer>
                <CancelBtnContainer onClick={onCancel}>Cancel</CancelBtnContainer>
                <SubmitBtn type="submit">Submit</SubmitBtn>
            </ButtonsContainer>
        </form>
    )
}