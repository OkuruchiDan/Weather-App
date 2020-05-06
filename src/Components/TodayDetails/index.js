import { connect } from "react-redux";
import { TodayDetails as ThreeDaysComponent} from "./TodayDetails";

const mapStateToProps = (state) => {
    const { weather , theme } = state;
    return{
        theme: theme, // toggle for darkMode
        weather: weather, // the main data
    }
} ;

export const ThreeDays = connect(mapStateToProps)(ThreeDaysComponent);
