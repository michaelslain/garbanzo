import { getDefaultNormalizer } from '@testing-library/react'

const getData = async () => {
    const data = localStorage.getItem('cart')
    const json = await JSON.parse(data)

    return json
}

export default {
    async storageInit() {
        const data = localStorage.getItem('cart')

        if (data == null || data === '') {
            localStorage.setItem('cart', JSON.stringify([]))
        }

        return
    },
    async getItems() {
        const data = await getData()
        return data
    },
    async addItem({ productId, amount }) {
        const data = await getData()

        const newObj = {
            id: data.length,
            productId,
            amount,
        }
        data.push(newObj)

        localStorage.setItem('cart', JSON.stringify(data))

        return
    },
    async removeItem({ id }) {
        const data = await getData()

        data = data
            .filter(item => item.id !== id)
            .map((item, i) => {
                item.id = i
                return item
            })

        localStorage.setItem('cart', JSON.stringify(data))

        return
    },
}
