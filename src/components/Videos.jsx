import React from 'react'
import { Stack, Box } from '@mui/material'

import { VideoCard, ChannelCard, Loader } from './index.js'

const Videos = ({ videos, direction }) => {
    if(!videos?.length) return <Loader />
    //console.log(videos)
    return (
        <Stack direction={ direction || "row" } flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {/* Si tiene estos propiedades entonces mostrarĂ¡ la tarjeta del video */}
                    {item.id.videoId && <VideoCard video={item} />}
                    {/* Sino mostrarĂ¡ la tarjeta del canal */}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos