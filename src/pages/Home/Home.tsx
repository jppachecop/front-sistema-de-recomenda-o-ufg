import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { api } from '../../services/api'
import { ProductsInterface } from '../../models/Products/Products'
import { ProductsStack } from '../../components/ProductsStack/ProductsStack'

export const Home = () => {
    const [promotionProducts, setPromotionProducts] = useState<
        ProductsInterface[]
    >([])
    const [mostSalesProducts, setMostSalesProducts] = useState<
        ProductsInterface[]
    >([])

    useEffect(() => {
        const requests = async () => {
            const pp = await api.get<ProductsInterface[]>('/promotions')

            setPromotionProducts(pp.data)

            const msp = await api.get<ProductsInterface[]>('/mostSales')

            setMostSalesProducts(msp.data)
        }
        requests()
    }, [])

    return (
        <Box textAlign="center" fontSize="xl">
            <Grid>
                <ColorModeSwitcher justifySelf="flex-end" />
                <ProductsStack
                    divider="Em Promoção"
                    products={promotionProducts}
                    detailsScreen={false}
                />
                <ProductsStack
                    divider="Mais Vendidos"
                    products={mostSalesProducts}
                    detailsScreen={false}
                />
            </Grid>
        </Box>
    )
}
