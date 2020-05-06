import { connect } from 'react-redux';
import { ChangeTheme as LogInComponent } from './ChangeTheme';
import {theme} from "../../actions";

const mapStateToProps = (state) => {
    const { theme } = state; // toggle for darkMode
    return{
        theme: theme,
    }
} ;

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            changeTheme: () => dispatch(theme()), // action for change Theme
        }
    }
};

const LogIn = connect(mapStateToProps , mapDispatchToProps)(LogInComponent);

export default LogIn;
