'use client'
import { Link } from '@chakra-ui/next-js'
import React from 'react'

export default function TestLink() {
    return (
        <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
            About
        </Link>
    )
}