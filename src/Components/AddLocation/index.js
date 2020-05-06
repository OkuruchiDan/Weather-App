import { connect } from "react-redux";
import { AddLocation as AddLocationComponent} from "./AddLocation";
import {addLocation , theme } from "../../actions";

const mapStateToProps = (state) => {
    const {weather , theme } = state;
    return {
        weather: weather, // the main data
        theme: theme, // toggle for darkMode
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            addLocation: () => dispatch(addLocation()), // actions for select current location
            theme: () => dispatch(theme()), // action for change theme
        }
    };
};

export const AddLocation = connect(mapStateToProps,mapDispatchToProps)(AddLocationComponent);
