import { Page } from "../pagestyle"

export default function Login() {
    return (
        <Page>
            <iframe
                src="https://chat.openai.com/"
                style={{ height: '100vh', width: '100%' }}
            >
            </iframe>
        </Page>
    )
}