import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Container,
    Grid,
    Box,
} from '@mui/material';
import {
    CalendarToday,
    AccessTime,
    Casino,
    People,
    EmojiEvents
} from '@mui/icons-material';
import LeagueTable from "./LeagueTable";
import UselessButton from "./UselessButton";

const icons = {
    "date": CalendarToday,
    "time": AccessTime,
    "die": Casino,
    "people": People,
    "trophy": EmojiEvents
}

/**
 * Creates a basic image
 * @param height - height of image
 * @param image - image name
 * @param mb - margin bottom
 * @param alt - Text alt description
 */
const BasicImage = ({height, image, mb, alt}) => {
    return <Box sx={{ width: '100%', margin: '0 auto', height: height, overflow: 'hidden', mb:mb}}>
        <img
            src={process.env.PUBLIC_URL + "/" + image}
            alt={alt}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
        />
    </Box>
}

/**
 * Text bar
 * @param text text to display
 * @param colourGradient for funky colours
 * @param mt margin top
 * @param mb margin bottom
 */
const TextBar = ({text, colourGradient, mt, mb}) => {
    return <Box
        sx={{
            height: 100,
            background: 'linear-gradient('+ colourGradient + ')',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            mb: mb,
            mt: mt
        }}
    >
        <Typography variant="h4" sx={{ color:"#fff", "text-align": "center" }}>
            {text}
        </Typography>
    </Box>
}

/**
 * Individual Card for Information
 * @param type must line up with an icon image
 * @param title
 * @param text
 */
const InfoCard = ({type, title, text}) => {
    const Icon = icons[type];
    return <Grid item xs={12} md={6}>
            <Card
            sx={{
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                }
            }}
        >
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Icon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h6">{title}</Typography>
                </Box>
                <Typography>{text}</Typography>
            </CardContent>
        </Card>
    </Grid>
}

/**
 * Row of Information as part of card
 * @param type must line up with an icon image
 * @param text
 */
const InfoRow = ({type, text}) => {
    const Icon = icons[type];
    return <Grid item xs={12}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'translateX(8px)' }
        }}>
            <Icon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
            <Typography>{text}</Typography>
        </Box>
    </Grid>
}

const EventPage = () => {

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            {/* Hero Banner */}
            <BasicImage height={"300px"} image={"banner.webp"} alt="Banner"/>
            <TextBar text={"Where Fun Meets Friends!"} colourGradient={"45deg, #6a1b9a 30%, #4a148c 90%"} mb={4}/>

            {/* This container limits the width of items in it*/}
            <Container maxWidth="lg">
                <BasicImage height={"300px"} image={"games2.webp"} mb={4} alt="Climbers enjoying a game"/>

                {/* Event Details */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <InfoCard type={"date"} title={"When"} text={"Saturday from 12:00 at Helen, Manu and Will's place"}/>
                    <InfoCard type={"time"} title={"Duration"} text={"Until people want to go home"}/>
                </Grid>

                {/* What to Expect */}
                <Card sx={{ mb: 6, p: 4 }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'primary.main' }}>
                        ✨ What's in Store ✨
                    </Typography>
                    <Grid container spacing={3}>
                        <InfoRow text={"Awesome board games for everyone!"} type={"die"}/>
                        <InfoRow text={"Fun, light conversation, with friends"} type={"people"}/>
                        <InfoRow text={"A sense of accomplishment and purpose"} type={"trophy"}/>
                    </Grid>
                </Card>

                <BasicImage height={"300px"} image={"games1.webp"} mb={6} alt="People enjoying a game"/>

                <UselessButton/>
                <LeagueTable/>
            </Container>

            <TextBar text={"See you at the gaming table! 🎲✨"} colourGradient={"45deg, #6a1b9a 30%, #4a148c 90%"} mb={2} mt={4}/>
        </Box>
    );
};

export default EventPage;