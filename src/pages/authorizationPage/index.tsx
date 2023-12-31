import { Header } from '../../components/header'
import { AuthLayoutSection } from '../../components/authLayoutSection'
import { EntryRegistrationContent } from '../../components/entryRegistrationContent'

export const AuthorizationPage = ()  => (
    <>
        <Header rating={false}/>
        <main>
            <AuthLayoutSection>
                <EntryRegistrationContent/>
            </AuthLayoutSection>
        </main>
    </>
)