"use client";

import { useState, useCallback } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/inputs/Input";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState(false);

    const togglevariant = useCallback(() => {
			if (variant === "LOGIN") {
				setVariant("REGISTER");
			} else {
				setVariant("LOGIN");
			}
		}, [variant]);

    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if(variant === 'REGISTER') {
            // se REGISTER usando axios
        }

        if(variant === 'LOGIN') {
            // LOGIN usando NextAuth
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
        //NextAuth para LOGIN usando redes sociais
    }

    return (
        <div
        className="mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md">
            <div className="bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10">
                <form className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}>
                <Input label="Digite seu Email" 
                register={register} 
                id="email"/>
                </form>
            </div>
            </div>
    )
}

export default AuthForm;