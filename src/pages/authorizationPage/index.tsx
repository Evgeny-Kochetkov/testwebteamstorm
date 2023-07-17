import { Header } from '../../components/header'
import { AuthLayoutSection } from '../../components/authorizationSection'

export const AuthorizationPage = ()  => {
    return (
        <>
            <Header/>
            <main>
                <AuthLayoutSection/>
            </main>
        </>
    )
}