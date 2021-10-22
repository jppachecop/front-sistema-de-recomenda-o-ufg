import { Divider, Grid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ProductsStackInterface } from '../../models/Products/ProductsStack'
import { Card } from '../Card/Card'

export const ProductsStack = ({
    divider,
    products,
}: ProductsStackInterface) => {
    return (
        <>
            <Stack direction="column" h="100px" p={4}>
                <Text as="b" align="left">
                    {divider}
                </Text>
                <Divider orientation="horizontal" />
            </Stack>

            <Grid templateColumns="repeat(4, 1fr)" gap={6} mr="5" ml="5">
                {products.map((item) => (
                    <Card
                        key={item.asin}
                        image={item.imUrl}
                        title={item.title}
                        price={item.price}
                        promotion={item.promotion}
                        discount={item.promotionDiscount}
                        rating={Math.floor(Math.random() * 3) + 1}
                        reviewCount={Math.floor(Math.random() * 50) + 1}
                    />
                ))}
            </Grid>
        </>
    )
}
