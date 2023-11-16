<template>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
            <div class="flex items-center justify-center">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                    Cadastrar-se
                </h3>
            </div>
        </template>

        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup label="E-mail" name="email" help="Digite seu email!" required>
                <UInput v-model="state.email" icon="i-heroicons-envelope" />
            </UFormGroup>

            <UFormGroup label="Senha" name="password" required>
                <UInput v-model="state.password" type="password" icon="i-heroicons-key" />
            </UFormGroup>

            <UFormGroup label="Confime sua senha" name="password" required>
                <UInput v-model="state.password_confirmation" type="password" icon="i-heroicons-key" />
            </UFormGroup>

            <UButton type="submit">
                Cadastrar-se
            </UButton>
        </UForm>
        <Placeholder class="h-32" />
    </UCard>
</template>


<script lang="ts">
export default {
    name: "signUpPage"
}
</script>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types"
import { object, string, type InferType } from "yup"
import { reactive } from "vue"


const schema = object({
    email: string().email("Email inváldo").required("Obrigatorio"),
    password: string()
        .min(8, "Mínimo 8 caracteres")
        .required("Obrigatorio"),
    password_confirmation: string()
        .min(8, "Mínimo 8 caracteres")
        .required("Obrigatório")
})

type Schema = InferType<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined,
    password_confirmation: undefined
})


async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with data
    console.log(event.data)
}


</script>