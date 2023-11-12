import {SVGProps, Ref, forwardRef, memo} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        viewBox="0 0 272 272"
        ref={ref}
        {...props}
    >
        <ellipse cx="136" cy="136.89" className="cls-1" rx="78.81" ry="79.36" fill={'#ecd57f'}/>
        <path d="m136 8-17.11 29.84h34.22L136 8zM264 136.88l-29.63 17.23v-34.45L264 136.88zM8 136.88l29.63 17.23v-34.45L8 136.88zM45.49 45.75l8.85 33.28 24.2-24.36-33.05-8.92zM226.51 45.75l-33.05 8.92 24.2 24.36 8.85-33.28zM136 264l-17.11-29.84h34.22L136 264zM45.49 226.25l8.85-33.28 24.2 24.36-33.05 8.92zM226.51 226.25l-33.05-8.92 24.2-24.36 8.85 33.28z"
            className="cls-1" fill={'#ecd57f'}/>
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)

