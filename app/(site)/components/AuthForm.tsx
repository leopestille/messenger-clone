"use client";

import { useState, useCallback } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

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
        sm:max-w-md"
			>
				<div
					className="bg-white
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10"
				>
					<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
						{variant === "REGISTER" && (
							<Input
								label="Digite seu Nome"
								register={register}
								id="name"
								errors={errors}
							/>
						)}
						<Input
							label="Digite seu Email"
							register={register}
							id="email"
							errors={errors}
							type="email"
						/>
						<Input
							label="Digite sua Senha"
							register={register}
							id="password"
							errors={errors}
							type="password"
						/>
						<div>
							<Button disabled={isLoading} fullWidth type="submit">
								{variant === "LOGIN" ? "Iniciar Sessão" : "Registrar"}
							</Button>
						</div>
					</form>
					<div className="mt-6">
						<div className="relative">
							<div
								className="absolute
                            inset-0
                            flex
                            items-center
                            "
							>
								<div className="w-full border-t border-gray-300" />
							</div>
							<div
								className="relative
                            flex
                            justify-center
                            text-sm"
							>
								<span
									className="bg-white
                                px-2
                                text-gray-500"
								>
									Ou continue com
								</span>
							</div>
						</div>
						<div
							className="mt-6
                        flex
                        gap-2"
						>
							<AuthSocialButton
								icon={BsGithub}
								onClick={() => socialAction("github")}
							/>
							<AuthSocialButton
								icon={BsGoogle}
								onClick={() => socialAction("google")}
							/>
						</div>
					</div>
					<div
						className="flex
                    gap-2
                    justify-center
                    text-sm
                    mt-6
                    px-2
                    text-gray-500"
					>
						<div>
							{variant === "LOGIN" ? "Novo no Messenger?" : "Já possui conta?"}
						</div>
						<div
							onClick={togglevariant}
							className="underline
                        cursor-pointer"
						>
							{variant === "LOGIN" ? "Criar Conta" : "Logar na sua conta"}
						</div>
					</div>
				</div>
			</div>
		);
}

export default AuthForm;