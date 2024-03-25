import React, { Component, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { getClasses } from '../styles/layout';

interface ExampleProps {
    style?: ViewStyle;
    className?: string;
    children?: ReactNode;
}

/**
 * @param style regular styling
 * @param className tailwind-style class props
 * @return example component
 */
export default class ExampleComponent extends Component<ExampleProps> {
    render() {
        const { style, children, className } = this.props;

        return (
            <View style={[getClasses(className), style]}>
                {children}
            </View>
        );
    }
}
