import React from 'react';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

const LeagueTable = () => {
    const teams = [
        { name: "Manchester City", wins: 7, draws: 2, losses: 0, GF: 20, GA: 9 },
        { name: "Liverpool", wins: 7, draws: 1, losses: 1, GF: 17, GA: 5 },
        { name: "Arsenal", wins: 5, draws: 3, losses: 1, GF: 17, GA: 10 },
        { name: "Aston Villa", wins: 5, draws: 3, losses: 1, GF: 16, GA: 11 },
        { name: "Chelsea",  wins: 5, draws: 2, losses: 2, GF: 19, GA: 11 }
    ];

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
            <Typography variant="h5" sx={{ p: 2 }}>
                League Standings
            </Typography>
            <Table aria-label="league table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Games</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>W</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>D</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>L</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>GF</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>GA</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>GD</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teams.map((team, index) => (
                        <TableRow
                            key={team.name}
                            sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}
                        >
                            <TableCell>{team.name}</TableCell>
                            <TableCell align="right">{team.wins + team.draws + team.losses}</TableCell>
                            <TableCell align="right">{team.wins}</TableCell>
                            <TableCell align="right">{team.draws}</TableCell>
                            <TableCell align="right">{team.losses}</TableCell>
                            <TableCell align="right">{team.GF}</TableCell>
                            <TableCell align="right">{team.GA}</TableCell>
                            <TableCell align="right">{team.GF - team.GA}</TableCell>
                            <TableCell align="right">{team.wins * 3 + team.draws}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LeagueTable;