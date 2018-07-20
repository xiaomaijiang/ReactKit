import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Index from '../../pages/Home/Index';
import * as sampleAction from '../../actions/sample';

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        sampleAction: bindActionCreators(sampleAction.default, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);



