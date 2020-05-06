import { connect } from 'react-redux';
import { Location as LocationComponent } from "./Location";
import {getApi} from "../../actions";

const mapStateToProps = (state) => {
  const { weather } = state; // the main data of weather
  return {
      weather: weather,
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions:{
            getApi: (payload) => dispatch(getApi(payload)),
        }
    }
};

export const Location = connect(mapStateToProps, mapDispatchToProps)(LocationComponent);
