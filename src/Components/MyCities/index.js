import { connect } from 'react-redux';
import { MyCities as MyCitiesComponent} from "./MyCities";

const mapStateToProps = (state) => {
    const { theme } = state;
    return{
        theme: theme,
    }
};

export const MyCities = connect(mapStateToProps)(MyCitiesComponent);
