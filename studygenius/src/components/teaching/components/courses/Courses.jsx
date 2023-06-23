import '../courses/Courses.css'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, Button } from '@mui/material';

const Courses = () => {
    return (
        <section className="course-search">
            <div className="course-search__inner">
                <TextField
                  label="Имя курса или ID"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    
                  }}
                />
                <Button variant="contained" color="success">
                    Искать
                </Button>
            </div>
        </section>
    )
}

export default Courses