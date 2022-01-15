import React from 'react'
import TopBackground from '../TopBackground/TopBackground'
import { Box, Container } from '@mui/material';
import Logo from '../Logo/Logo';
import MatchList from '../MatchList/MatchList';

export default function Home() {

    return (
        <div>
            <Logo/>
            <Container>
                <MatchList/>
            </Container>
        </div>
    )
}
