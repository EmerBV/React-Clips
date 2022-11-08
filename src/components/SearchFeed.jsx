import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Videos } from './index.js'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'

const SearchFeed = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant='h4' fontWeight={900} mb={3} sx={{ color: '#6e6e73' }}>
        Search Results for: <span style={{ color: '#1d1d1f' }}>{searchTerm}</span> videos
      </Typography>

      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed