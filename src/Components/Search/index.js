import { connect } from 'react-redux';
import { Search as SearchComponent} from "./Search";
import {getApi} from "../../actions";

const mapStateToProps = (state) => {
    const { weather } = state;
    return {
        weather: weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        actions: {
            getApi: (payload) => dispatch(getApi(payload)) // action for fetching
        }
    }
}

export const Search = connect(mapStateToProps , mapDispatchToProps)(SearchComponent);
