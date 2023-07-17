import { Header } from '../../components/header'
import { AuthLayoutSection } from '../../components/authLayoutSection'
import { MainContent } from '../../components/mainContent'

export const MainPage = ()  => (
    <>
        <Header rating={true}/>
        <main>
            <AuthLayoutSection>
                <MainContent/>
            </AuthLayoutSection>
        </main>
    </>
)