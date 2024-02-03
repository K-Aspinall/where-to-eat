// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { TRPCReactProvider } from "~/trpc/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider><TRPCReactProvider>{children}</TRPCReactProvider ></ChakraProvider>
}