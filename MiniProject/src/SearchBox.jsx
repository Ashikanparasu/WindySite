import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox() {
    const [city, setCity] = useState("");

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
    };

    return (
        <div className="SearchBox">
            <h3>SEARCH FOR THE WEATHER</h3>

            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="CityName"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                    Search
                </Button>
            </form>
        </div>
    );
}