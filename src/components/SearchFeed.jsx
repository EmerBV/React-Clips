import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Videos } from './index.js'
import { fetchFromAPI } from '../utils/fetchFromAPI.js'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#6e6e73' }}>
        Search Results for: <span style={{ color: '#1d1d1f' }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed