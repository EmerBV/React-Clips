import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

//Destructuro el video para coger los datos que quiero que aparezcan
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    //console.log(videoId, snippet);
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' } }}>
            {/* Si videoId existe entonces se dirigirá al video sino se dirigirá a la dirección demo */}
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                {/* <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.tittle} sx={{ width: 358, height: 180 }} /> */}
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.tittle}
                    sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#f5f5f7', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#1d1d1f">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="#06c">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard