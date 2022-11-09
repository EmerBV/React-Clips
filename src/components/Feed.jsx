import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { Categories, Videos } from './index.js'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)

  // ANTES:
  /* useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]) */

  // DESPUÉS:
  useEffect(() => {
    setVideos(null);
    const fetchVideos = async () => {
      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(data.items);
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ position: 'relative', height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #d2d2d7', px: { sx: 0, md: 2 } }}>
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{ mt: 4, color: '#6e6e73', ml: "25px" }}>
          Copyright &#169; 2022 EmerBV
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#6e6e73' }}>
          {selectedCategory || 'Recommended'} <span style={{ color: '#1d1d1f' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed