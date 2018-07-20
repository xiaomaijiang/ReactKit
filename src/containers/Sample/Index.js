import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Index from '../../pages/Sample/Index';
import * as sampleAction from '../../actions/sample';

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        sampleAction: bindActionCreators(sampleAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);



