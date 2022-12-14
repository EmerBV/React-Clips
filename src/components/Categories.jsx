import React from 'react'
import { Stack } from '@mui/material'

import { categories } from '../utils/constants'

const Categories = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                width: { md: '220px' },
                height: { md: '77vh' },
                flexDirection: { md: 'column' }
            }}
        >
            {categories.map((category) => (
                <button
                    className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#61dafb', color: '#424245',
                    }}
                    key={category.name}
                >
                    <span
                        style={{
                            color: category.name === selectedCategory ? '#424245' : '#6e6e73',
                            marginRight: '15px'
                        }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{
                            opacity: category.name === selectedCategory ? '1' : '0.8'
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    )
}

export default Categories