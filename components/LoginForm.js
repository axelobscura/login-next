import react, { Component } from 'React';
import { formatWithValidation } from 'next/dist/next-server/lib/utils';

class LoginForm extends Component {
    render(){
        return(
            <form>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <button type="submit">ENVIAR DATOS</button>
            </form>
        )
    }
};

export default LoginForm;