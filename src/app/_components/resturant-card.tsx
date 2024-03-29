'use client'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { type Resturant } from "@prisma/client";
import Link from "next/link";

export type ResturantCardProps = {
  resturant: Resturant
}

export const ResturantCard = ({ resturant }: ResturantCardProps) => (
  <Link href={''}>
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{resturant.name}</Heading>

          <Text py='2'>
            {resturant.description}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Book Table
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  </Link>
)

export default ResturantCard