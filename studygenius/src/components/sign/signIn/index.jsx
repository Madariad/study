import "./style.css"
import axiosConfig from "../../../axiosConfig" 
import { useNavigate } from "react-router-dom";

function signIn() {
    const navigate = useNavigate()
    const login = async (event) => {
        event.preventDefault();
      
        const email = event.target.email.value;
        const password = event.target.pswd.value;
      
        try {
          const logins = await axiosConfig.post('/users/login', { email, password });
          localStorage.setItem('token', logins.data.token);
          const token = localStorage.getItem('token')
          if(token) {
            console.log('jiij');
            
            window.location.href = "/";
          }
          console.log(logins.data);
        } catch (error) {
          console.error(error);
        }
      }

      const register = async (event) => {
        event.preventDefault();
      
        const username = event.target.txt.value;
        const email = event.target.email.value;
        const password = event.target.pswd.value;
        const role_name = event.target.role.value; 
      
        try {
          const registers = await axiosConfig.post('/users/register', { username, email, password, role_name });
          localStorage.setItem('token', registers.data.token);
          const token = localStorage.getItem('token')
          if(token) {
            console.log('jiij');
            
            window.location.href = "/";
          }
          console.log(registers.data);
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <div className="mains">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="login">
				<form className="form" onSubmit={login}>
					<label for="chk" aria-hidden="true" className="label">Log in</label>
					<input className="inputs" type="email" name="email" placeholder="Email" required="" />
					<input className="inputs" type="password" name="pswd" placeholder="Password" required="" />
					<button>Log in</button>
				</form>
			</div>

      <div className="register">
				<form className="form" onSubmit={register}>
					<label for="chk" aria-hidden="true" className="label">Register</label>
					<input className="inputs" type="text" name="txt" placeholder="Username" minLength={4} required="" />
					<input className="inputs" type="email" name="email" placeholder="Email" required="" />
					<input className="inputs" type="password" name="pswd" placeholder="Password" required="" minLength={8} />
                    <select name="role">
                        <option value="teachers">Teachers</option>
                        <option value="students">Students</option>
                    </select>
					<button>Register</button>
				</form>
			</div>
	</div>
    )
}

export default signIn