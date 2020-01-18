import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { authUser } from '../../store/actions/UsersActions/auth_user';
import { useTranslation, withTranslation } from 'react-i18next';


function Header() {
    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <header>
            <h1>Header</h1>
                <button onClick={() => changeLanguage('de')}>de</button>
            <button onClick={() => changeLanguage('en')}>en</button>
        </header>
    );
}


const state = (state, ownProps = {}) => {

    return {
        location: state.location,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        navigateTo: (location) => {
            dispatch(push(location));
        },
        onAuthUser: () => (dispatch(authUser()))
    }
};

export default connect(state, mapDispatchToProps)(withTranslation()(Header));