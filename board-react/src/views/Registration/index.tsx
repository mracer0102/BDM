import { Box, Card, CardContent, CardActions, TextField , Button, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';

export default function Registration() {
    const userId = uuid();
    const [userName, setUserName] = useState<string>("");
    const [userAge, setUserAge] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [userGender, setUserGender] = useState<string>("female");
    const [error, setError] = useState<string | null>(null)
    
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
        validateName();
    };
    const validateName = () => {
        const nameRegex = /^!@#$%^&*()_+=+$g/;
        if (nameRegex.test(userName)) {
            setError('Please enter a valid name');
         } else {
            setError('');
        }
    };

    const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserAge(event.target.value);
        validateAge();
    };

    const validateAge = () => {
        const ageRegex = /^\d+$/;
        if (!ageRegex.test(userAge)) {
            setError('Please enter a valid age');
        } else {
            setError('');
        }
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value);
        validateEmail();
    };
    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(userEmail)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
        }
    };

    const handleGenderChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUserGender((event.target as HTMLInputElement).value);
    }

    const data = {
        userId,
        userName,
        userAge,
        userEmail,
        userGender,
    };

    const addHandler = () => {
        axios
        .post("http://localhost:4000/api/add", data)
        .then((response) => {
            console.log("success");
        })
        .catch((error) => {
            console.log("Failed");
        })
    }

  return (
    <Card sx={{minWith:275, maxWidth:"50vw"}}>
        <CardContent>
            <Box>
                <TextField fullWidth id="name" label="Name" variant="standard" onChange={handleNameChange}/>
                <TextField fullWidth id="age" label="Age" variant="standard" onChange={handleAgeChange}/>
                <TextField fullWidth id="email" label="Email" type="email" variant="standard" onChange={handleEmailChange}/>
                <FormControl fullWidth>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" defaultValue="Female"
                        name="row-radio-buttons-group" value={userGender} onChange={handleGenderChange}>
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                     </RadioGroup>
                </FormControl>

                {error && (
                <Box className="bg-red-800 p-4 font-bold text-white">
                    {error}
                </Box>
            )}
            </Box>
        </CardContent>
        <CardActions>
            <Button fullWidth onClick={() => addHandler()}>Registration</Button>
        </CardActions>
    </Card>
  )
}
