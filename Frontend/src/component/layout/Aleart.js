import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import alerts from "../../Reducer/aleart";
// it is getting pop on the browser!!!!

const Alert = ({ alerts }) =>
    alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
            <div key={alert.key} className={`alert alert-${alert.alertType}`}>
                {alert.msg}
            </div>
        ))

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);