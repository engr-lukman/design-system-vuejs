<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { RegisterFormData, RegisterFormLabels } from './types'

interface Props {
  labels?: RegisterFormLabels
  loading?: boolean
  disabled?: boolean
  showLoginLink?: boolean
  nameError?: string
  emailError?: string
  passwordError?: string
  confirmPasswordError?: string
  agreeToTermsError?: string
  generalError?: string
}

const props = withDefaults(defineProps<Props>(), {
  labels: () => ({}),
  loading: false,
  disabled: false,
  showLoginLink: true,
  nameError: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
  agreeToTermsError: '',
  generalError: '',
})

const emit = defineEmits<{
  (e: 'submit', data: RegisterFormData): void
  (e: 'login'): void
}>()

const form = reactive<RegisterFormData>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const l = computed<Required<RegisterFormLabels>>(() => ({
  title: props.labels.title ?? 'Create an account',
  subtitle: props.labels.subtitle ?? 'Enter your details to get started',
  nameLabel: props.labels.nameLabel ?? 'Full name',
  namePlaceholder: props.labels.namePlaceholder ?? 'John Doe',
  emailLabel: props.labels.emailLabel ?? 'Email',
  emailPlaceholder: props.labels.emailPlaceholder ?? 'you@example.com',
  passwordLabel: props.labels.passwordLabel ?? 'Password',
  passwordPlaceholder: props.labels.passwordPlaceholder ?? '••••••••',
  confirmPasswordLabel: props.labels.confirmPasswordLabel ?? 'Confirm password',
  confirmPasswordPlaceholder: props.labels.confirmPasswordPlaceholder ?? '••••••••',
  agreeToTermsLabel: props.labels.agreeToTermsLabel ?? 'I agree to the terms and conditions',
  submitLabel: props.labels.submitLabel ?? 'Create account',
  loginLabel: props.labels.loginLabel ?? 'Already have an account?',
  loginLinkLabel: props.labels.loginLinkLabel ?? 'Sign in',
}))

const inputBaseClass =
  'block w-full rounded-md border px-4 py-2 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-gray-400'

function inputClass(hasError: boolean) {
  return [
    inputBaseClass,
    hasError
      ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20'
      : 'border-gray-300 focus-visible:border-gray-950 focus-visible:ring-gray-950',
  ]
}

function onSubmit() {
  emit('submit', { ...form })
}
</script>

<template>
  <div class="mx-auto w-full max-w-sm">
    <div class="mb-6 text-center">
      <slot name="logo" />
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        {{ l.title }}
      </h2>
      <p class="mt-1 text-sm text-gray-500">
        {{ l.subtitle }}
      </p>
    </div>

    <div
      v-if="generalError"
      class="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
      role="alert"
    >
      {{ generalError }}
    </div>

    <form
      class="space-y-4"
      novalidate
      @submit.prevent="onSubmit"
    >
      <!-- Name -->
      <div class="flex flex-col gap-1.5">
        <label
          for="register-name"
          class="text-sm font-medium text-gray-700"
        >
          {{ l.nameLabel }}
          <span
            class="text-red-500"
            aria-hidden="true"
          >*</span>
        </label>
        <input
          id="register-name"
          v-model="form.name"
          type="text"
          autocomplete="name"
          :placeholder="l.namePlaceholder"
          :disabled="disabled || loading"
          required
          :class="inputClass(!!nameError)"
          :aria-invalid="!!nameError"
          :aria-describedby="nameError ? 'register-name-error' : undefined"
        >
        <p
          v-if="nameError"
          id="register-name-error"
          class="text-sm text-red-600"
          role="alert"
        >
          {{ nameError }}
        </p>
      </div>

      <!-- Email -->
      <div class="flex flex-col gap-1.5">
        <label
          for="register-email"
          class="text-sm font-medium text-gray-700"
        >
          {{ l.emailLabel }}
          <span
            class="text-red-500"
            aria-hidden="true"
          >*</span>
        </label>
        <input
          id="register-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          :placeholder="l.emailPlaceholder"
          :disabled="disabled || loading"
          required
          :class="inputClass(!!emailError)"
          :aria-invalid="!!emailError"
          :aria-describedby="emailError ? 'register-email-error' : undefined"
        >
        <p
          v-if="emailError"
          id="register-email-error"
          class="text-sm text-red-600"
          role="alert"
        >
          {{ emailError }}
        </p>
      </div>

      <!-- Password -->
      <div class="flex flex-col gap-1.5">
        <label
          for="register-password"
          class="text-sm font-medium text-gray-700"
        >
          {{ l.passwordLabel }}
          <span
            class="text-red-500"
            aria-hidden="true"
          >*</span>
        </label>
        <div class="relative">
          <input
            id="register-password"
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="new-password"
            :placeholder="l.passwordPlaceholder"
            :disabled="disabled || loading"
            required
            :class="[...inputClass(!!passwordError), 'pr-10']"
            :aria-invalid="!!passwordError"
            :aria-describedby="passwordError ? 'register-password-error' : undefined"
          >
          <button
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
            @click="showPassword = !showPassword"
          >
            <svg
              v-if="!showPassword"
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path
                fill-rule="evenodd"
                d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.092 1.092a4 4 0 0 0-5.558-5.558Z"
                clip-rule="evenodd"
              />
              <path
                d="M10.748 13.93l2.523 2.523A9.987 9.987 0 0 1 10 17a10.004 10.004 0 0 1-9.336-6.41 1.651 1.651 0 0 1 0-1.186 10.007 10.007 0 0 1 2.862-4.143L6.09 7.826A4 4 0 0 0 10.748 13.93Z"
              />
            </svg>
          </button>
        </div>
        <p
          v-if="passwordError"
          id="register-password-error"
          class="text-sm text-red-600"
          role="alert"
        >
          {{ passwordError }}
        </p>
      </div>

      <!-- Confirm Password -->
      <div class="flex flex-col gap-1.5">
        <label
          for="register-confirm-password"
          class="text-sm font-medium text-gray-700"
        >
          {{ l.confirmPasswordLabel }}
          <span
            class="text-red-500"
            aria-hidden="true"
          >*</span>
        </label>
        <div class="relative">
          <input
            id="register-confirm-password"
            v-model="form.confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            autocomplete="new-password"
            :placeholder="l.confirmPasswordPlaceholder"
            :disabled="disabled || loading"
            required
            :class="[...inputClass(!!confirmPasswordError), 'pr-10']"
            :aria-invalid="!!confirmPasswordError"
            :aria-describedby="confirmPasswordError ? 'register-confirm-password-error' : undefined"
          >
          <button
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            :aria-label="showConfirmPassword ? 'Hide password' : 'Show password'"
            @click="showConfirmPassword = !showConfirmPassword"
          >
            <svg
              v-if="!showConfirmPassword"
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path
                fill-rule="evenodd"
                d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.092 1.092a4 4 0 0 0-5.558-5.558Z"
                clip-rule="evenodd"
              />
              <path
                d="M10.748 13.93l2.523 2.523A9.987 9.987 0 0 1 10 17a10.004 10.004 0 0 1-9.336-6.41 1.651 1.651 0 0 1 0-1.186 10.007 10.007 0 0 1 2.862-4.143L6.09 7.826A4 4 0 0 0 10.748 13.93Z"
              />
            </svg>
          </button>
        </div>
        <p
          v-if="confirmPasswordError"
          id="register-confirm-password-error"
          class="text-sm text-red-600"
          role="alert"
        >
          {{ confirmPasswordError }}
        </p>
      </div>

      <!-- Agree to terms -->
      <div class="flex flex-col gap-1.5">
        <div class="flex items-start gap-2">
          <input
            id="register-terms"
            v-model="form.agreeToTerms"
            type="checkbox"
            class="mt-0.5 h-4 w-4 rounded border-gray-300 accent-gray-900 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
            :disabled="disabled || loading"
          >
          <label
            for="register-terms"
            class="text-sm text-gray-700"
          >
            {{ l.agreeToTermsLabel }}
          </label>
        </div>
        <p
          v-if="agreeToTermsError"
          class="text-sm text-red-600"
          role="alert"
        >
          {{ agreeToTermsError }}
        </p>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="disabled || loading"
        class="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        <svg
          v-if="loading"
          class="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        {{ l.submitLabel }}
      </button>

      <!-- Login link -->
      <p
        v-if="showLoginLink"
        class="text-center text-sm text-gray-500"
      >
        {{ l.loginLabel }}
        <button
          type="button"
          class="font-medium text-gray-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
          @click="emit('login')"
        >
          {{ l.loginLinkLabel }}
        </button>
      </p>
    </form>

    <slot name="footer" />
  </div>
</template>
