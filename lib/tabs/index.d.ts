import * as React from 'react';
interface TabProps {
    value?: string | number;
    active?: boolean;
    onClick?: React.MouseEventHandler;
    width?: number;
    className?: string;
    style?: any;
    changeBarToTab?: Function;
    type?: string;
}
declare class Tab extends React.Component<TabProps> {
    tab: any;
    ripple: any;
    createRipple: (e: any) => void;
    render(): JSX.Element;
}
/**
 * 1. 设置tab的label和value
 * 2. onChange 方法回调
 */
interface TabsProps {
    value?: string | number;
    onChange?: Function;
    width?: number;
    className?: string;
    style?: any;
    type?: string;
}
export default class Tabs extends React.Component<TabsProps> {
    activeBar: any;
    activeTab: any;
    static Item: typeof Tab;
    componentDidUpdate(): void;
    handleClickTab: (_: any, value: any, index: any) => void;
    componentDidMount(): void;
    handleChangeBar: () => void;
    render(): JSX.Element;
}
export {};
