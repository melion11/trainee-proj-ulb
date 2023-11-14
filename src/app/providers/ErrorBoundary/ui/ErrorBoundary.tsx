import {Component, ErrorInfo, ReactNode, Suspense} from 'react';
import {PageError} from 'widgets';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
    }

    render() {
        const children = this.props.children
        const hasError = this.state.hasError

        if (hasError) {
            return <Suspense fallback={''}><PageError/></Suspense>
        }

        return children;
    }
}