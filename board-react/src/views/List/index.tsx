import axios from 'axios';
import React, { useState } from 'react'
import { Box, Card, CardContent, CardActions, TableContainer , Table , TableHead,  TableRow, TableCell, TableBody, Paper, Button} from '@mui/material';

export default function Index() {
    const [users, setUsers] = useState([]);
    const addHandler = () => {
        axios
        .get("http://localhost:4000/api/list?gender=Male")
        .then((response) => {
            if (response.status == 200) {
                setUsers(response.data.data);
            }
            console.log("success");
        })
        .catch((error) => {
            console.log("Failed");
        })
    }

    return (
        <Card sx={{minWith:275, maxWidth:"50vw"}}>
            <CardContent>
                <Button fullWidth onClick={() => addHandler()}>Show user list</Button>
            </CardContent>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Gender</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((row:any) => (
                        <TableRow
                        key={row.userName}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.userName}
                        </TableCell>
                        <TableCell align="right">{row.userAge}</TableCell>
                        <TableCell align="right">{row.userEmail}</TableCell>
                        <TableCell align="right">{row.userGender}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </Card>
    )
}
function userState(): [any, any] {
    throw new Error('Function not implemented.');
}

