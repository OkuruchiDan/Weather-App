import { connect } from 'react-redux';
import { App as AppComponent } from './App';
import {getApi} from "../../actions";

const mapStateToProps = (state) => {
    console.log('___________________');
    console.log(state);
    console.log('___________________');
    const { theme } = state;
    return {
        theme: theme,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions:{
            getApi: (payload) => dispatch(getApi(payload)),
        }
    }
};

const App = connect(mapStateToProps , mapDispatchToProps)(AppComponent);

export default App;
