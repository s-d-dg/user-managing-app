import { CancelBtn } from "@/components/ui/buttons/cancel-form/cancel-btn";
import { SubmitBtn } from "@/components/ui/buttons/submit/submit-btn";
import { FormInput } from "@/components/ui/input/form-input";
import { User } from "@/store/users/model";
import { useForm, SubmitHandler, FieldError } from "react-hook-form"
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

const InputWithError = styled.div`
    width: 100%
`

const ButtonsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
`

const CancelBtnContainer = styled(CancelBtn)`
    margin-right: 10px;
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 10px;
`;

export interface UserFormProps {
    user?: User;
    onCancel: () => void;
    onSubmit: (user: Omit<User, "id">) => void;
}

const getErrorMessage = (error: FieldError) => {
    const type = error.type;
    switch (type) {
        case 'required':
            return "This field is required";
        case 'maxLength':
            return "This value is too long"
        case 'pattern':
            return 'Incorrect format'
    }
}

export default function UserForm({ user, onCancel, onSubmit }: UserFormProps) {
    const {
        register,
        watch,
        handleSubmit,
        getValues,
        clearErrors,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmitForm: SubmitHandler<Inputs> = (data) => {
        onSubmit({ ...data });
    };

    // console.log(getValues());

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>

            <FormRow>
                <FormLabel>Name:</FormLabel>
                <InputWithError>
                    <FormInput {...register("name", {
                        value: user ? user.name : "",
                        required: true,
                        maxLength: 30
                    })} />
                    {errors.name && <ErrorMessage>{getErrorMessage(errors.name)}</ErrorMessage>}
                </InputWithError>
            </FormRow>

            <FormRow>
                <FormLabel>Username:</FormLabel>
                <InputWithError>
                    <FormInput {...register("username", {
                        value: user ? user.username : "",
                        required: true,
                        maxLength: 30
                    })} />
                    {errors.username && <ErrorMessage>{getErrorMessage(errors.username)}</ErrorMessage>}
                </InputWithError>
            </FormRow>


            <FormRow>
                <FormLabel>Email:</FormLabel>
                <InputWithError>
                    <FormInput {...register("email", {
                        value: user ? user.email : "",
                        required: true,
                        maxLength: 50,
                        pattern: /^\S+@\S+\.\S+$/
                    })} />
                    {errors.email && <ErrorMessage>{getErrorMessage(errors.email)}</ErrorMessage>}
                </InputWithError>
            </FormRow>

            <FormRow>
                <FormLabel>City:</FormLabel>
                <InputWithError>
                    <FormInput {...register("city", {
                        value: user ? user.city : "",
                        required: true,
                        maxLength: 30
                    })} />
                    {errors.city && <ErrorMessage>{getErrorMessage(errors.city)}</ErrorMessage>}
                </InputWithError>
            </FormRow>

            <ButtonsContainer>
                <CancelBtnContainer onClick={onCancel}>Cancel</CancelBtnContainer>
                <SubmitBtn type="submit">Submit</SubmitBtn>
            </ButtonsContainer>
        </form>
    )
}