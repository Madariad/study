import '../createcourse/CreateCourse.css'
import { TextField, Button } from "@mui/material"

const CreateCourse = () => {
    return (
        <section className="create-course">
            <div className="create-course__inner">
                <h2>Создать новый курс</h2>
                <TextField id="outlined-basic" label="Название курса" variant="outlined" />
                <Button variant="contained" color="success">Создать</Button>
            </div>
        </section>
    )
}

export default CreateCourse