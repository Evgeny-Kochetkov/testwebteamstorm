import { SNavMenuButton } from './style';

export const NavMenuButton = ({children, id, red, bigSize}: {children: React.ReactNode, id: string, red: boolean | undefined, bigSize: boolean | undefined}) => {
    return (
        <SNavMenuButton id={id} red={red} bigSize={bigSize}>
            {children}
        </SNavMenuButton>
    )
}