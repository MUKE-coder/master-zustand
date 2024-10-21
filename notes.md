```
import { create } from 'zustand'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id)
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return { items: [...state.items, { ...product, quantity: 1 }] }
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
}))
```

## With Persist

```
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }
          return { items: [...state.items, { ...product, quantity: 1 }] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
)
```

## Get Cart Count

```
 const cartItemsCount = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0))

```

## Auth Store

```
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: number
  name: string
  email: string
  age: number
  image: string
  course: string
  role: string
}

interface AuthStore {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

// Mock user data
const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    image: '/placeholder.svg?height=128&width=128',
    course: 'Computer Science',
    role: 'Student',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 28,
    image: '/placeholder.svg?height=128&width=128',
    course: 'Data Science',
    role: 'Student',
  },
]

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: async (email: string, password: string) => {
        // In a real application, you would validate the password here
        const user = users.find((u) => u.email === email)
        if (user) {
          set({ user })
          return true
        }
        return false
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
)
```
