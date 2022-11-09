import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Card
            sx={{
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: { xs: '350px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop,
                background: '#f5f5f7',
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>

                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '160px', width: '160px', mb: 2, border: '1px solid #e3e3e3' }}
                />

                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700 }} color="#06c">
                        {channelDetail?.snippet?.title}
                        <CheckCircleIcon sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </Typography>
                    )}
                </CardContent>

            </Link>
        </Card>
    )
}

export default ChannelCard