import { 
    SAuthLayoutSection,
    SSpanLeft,
    SSpanRight,
    SSpanBottom
} from './style'

export const AuthLayoutSection = ({children}: {children: React.ReactNode}) => (
    <SAuthLayoutSection>
        <SSpanLeft/>
        <SSpanRight/>
        <SSpanBottom/>
        {children}
    </SAuthLayoutSection>
)