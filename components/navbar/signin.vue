<template>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
            <div class="flex items-center justify-center">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                    Entrar
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

            <div class="flex justify-center">
                <UButton :loading="loading" type="submit">
                {{ loading ? 'Entrando...' : 'Entrar' }}
            </UButton>
            </div>
        </UForm>
        <Placeholder class="h-32" />
    </UCard>
</template>

<script lang="ts">
export default {
	name: "signInPage",
}
</script>

<script setup lang="ts">
import {ref} from "vue"
import type { FormSubmitEvent } from "#ui/types"
import { object, string, type InferType } from "yup"
import { reactive } from "vue"
import axios from "axios"

// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
const loading = ref(false)
const schema = object({
	email: string().email("Email inváldo").required("Obrigatorio"),
	password: string()
		.min(8, "Mínimo 8 caracteres")
		.required("Obrigatorio")
})

type Schema = InferType<typeof schema>

const state = reactive({
	email: undefined,
	password: undefined
})


async function onSubmit(event: FormSubmitEvent<Schema>) {
	// Do something with data
	try {
		loading.value = true
		const response = await axios.post(config.public.appUrl + "/auth/sign_in", {
			email: event.data.email,
			password: event.data.password
		})
		document.cookie = `uid=${response.headers["uid"]} path=/`
		document.cookie = `access-token=${response.headers["access-token"]}`
		document.cookie = `client=${response.headers["client"]} path=/`
		
	} catch (error) {
		loading.value = false
		console.error("Erro ao fazer a solicitação POST:", error)
	} finally {
		window.location.reload()
	}
}
</script>