import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { Sidebar, Videos } from './index.js'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #d2d2d7', px: { sx: 0, md: 2 } }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#6e6e73' }}>
          Copyright &#169; 2022 EmerBV
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#6e6e73' }}>
          {selectedCategory} <span style={{ color: '#1d1d1f' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed