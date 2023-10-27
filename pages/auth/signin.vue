<template>
    <UContainer class="flex justify-center">
        <UForm class="max-w-sm" :validate="validate" :state="state" @submit="submit">
            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" />
            </UFormGroup>
            <UFormGroup label="Senha" name="password">
                <UInput v-model="state.password" type="password" />
            </UFormGroup>
            <UButton icon="i-heroicons-arrow-right-on-rectangle" class="mt-6" type="submit">
                Entrar
            </UButton>
        </UForm>
    </UContainer>
</template>

<script lang="ts">
export default {
	name: "SignInPage"
}
</script>

<script setup lang="ts">
import { ref } from "vue"
import type { FormError, FormSubmitEvent } from "@nuxt/ui/dist/runtime/types"

interface State {
    email: string | undefined
    password: string | undefined
}

const state = ref({
	email: undefined,
	password: undefined
})

const validate = (state: State): FormError[] => {
	const errors = []
	if (!state.email) errors.push({ path: "email", message: "Não pode ser vazio" })
	if (!state.password) errors.push({ path: "password", message: "Não pode ser vazio" })
	return errors
}

const loading = ref(false)
async function submit(event: FormSubmitEvent<State>) {
	// Do something with data
	console.log(event.data)
}
</script>