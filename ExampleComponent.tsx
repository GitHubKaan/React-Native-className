import React, { Component } from 'react';
import { View } from 'react-native';
import { getClasses } from './layout';

interface ExampleProps {
    style?: any;
    className?: string;

    children?: any;
}

/**
 * @param style regular styling
 * @param className tailwind-style class props
 * @return exmaple component
 */
export default class ExampleComponent extends Component<ExampleProps> {
    render() {
        const { style, children, className } = this.props;

        return (
            <View style={[getClasses(className), style]}> {/* This can be a View, Text etc. */}
                {children}
            </View>
        );
    }
}

