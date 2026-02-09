import { ref } from 'vue'
import type { SonnerToast } from './types'

const toasts = ref<SonnerToast[]>([])

let counter = 0

function addToast(toast: Omit<SonnerToast, 'id'>) {
  const id = `toast-${++counter}`
  const duration = toast.duration ?? 4000

  toasts.value.push({ ...toast, id })

  if (duration > 0) {
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  return id
}

function removeToast(id: string) {
  const index = toasts.value.findIndex((t) => t.id === id)
  if (index !== -1) toasts.value.splice(index, 1)
}

export function useSonner() {
  return {
    toasts,
    toast(title: string, options?: Partial<Omit<SonnerToast, 'id' | 'title'>>) {
      return addToast({ title, variant: 'default', ...options })
    },
    success(title: string, options?: Partial<Omit<SonnerToast, 'id' | 'title' | 'variant'>>) {
      return addToast({ title, variant: 'success', ...options })
    },
    error(title: string, options?: Partial<Omit<SonnerToast, 'id' | 'title' | 'variant'>>) {
      return addToast({ title, variant: 'error', ...options })
    },
    warning(title: string, options?: Partial<Omit<SonnerToast, 'id' | 'title' | 'variant'>>) {
      return addToast({ title, variant: 'warning', ...options })
    },
    info(title: string, options?: Partial<Omit<SonnerToast, 'id' | 'title' | 'variant'>>) {
      return addToast({ title, variant: 'info', ...options })
    },
    dismiss: removeToast,
    dismissAll() {
      toasts.value = []
    },
  }
}
