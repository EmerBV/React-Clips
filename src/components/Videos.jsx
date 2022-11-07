import React from 'react'
import { Stack, Box } from '@mui/material'

import { VideoCard, ChannelCard } from './index.js'

const Videos = ({ videos, direction }) => {
    //console.log(videos)
    return (
        <Stack direction={ direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {/* Si tiene estos propiedades entonces mostrará la tarjeta del video */}
                    {item.id.videoId && <VideoCard video={item} />}
                    {/* Sino mostrará la tarjeta del canal */}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos