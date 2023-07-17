import { Header } from '../../components/header'
import { AuthLayoutSection } from '../../components/authorizationSection'
import { EntryRegistrationContent } from '../../components/entryRegistrationContent'

export const AuthorizationPage = ()  => (
    <>
        <Header/>
        <main>
            <AuthLayoutSection>
                <EntryRegistrationContent/>
            </AuthLayoutSection>
        </main>
    </>
)