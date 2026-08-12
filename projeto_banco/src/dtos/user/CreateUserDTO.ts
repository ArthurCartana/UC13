import z from "zod";

export const CreateUserDTO = z.object({
    name: z.string("O nome é obrigatório e deve ser uma string")
        .min(3, "O nome deve conter mo mínimo 3 caractéres.")
        .max(100, "O nome deve conter no máximo 100 caractéres."),

    email: z.email("E-mail inválido"),

    password: z.string()
        .min(6, "A senha deve conter pelo menos 6 caractéres.")
        .max(256, "A senha deve conter no máximo 256 caractéres.")
        .regex(/^(?=.*[A-Z])/, "A senha deve conter pelo menos uma letra maiúscula")
        .regex(/^(?=.*[a-z])/, "A senha deve conter uma letra minúscula")
        .regex(/^(?=.*[0-9])/, "A senha deve conter um número")
        .regex(/^(?=.*[!@#$%&*_{}\[\]/\\~^])/, "A senha deve conter um caractere especial")
})

export type CreateUserDTO = z.infer<typeof CreateUserDTO>;  