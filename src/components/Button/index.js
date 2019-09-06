/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ActivyIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';

export default function Button({children, loading, ...rest}) {
    return (
        <Container {...rest}>
            {loading ? (
                <ActivyIndicator size="small" color="#FFF" />
            ) : (
                <Text>{children}</Text>
            )}
        </Container>
    );
}
Button.propTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};
Button.defaultProps = {
    loading: false,
};
