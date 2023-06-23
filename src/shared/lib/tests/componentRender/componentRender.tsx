import { render } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateShema } from 'app/providers/StoreProvider/config/StateShema'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18nForTest'

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateShema>
}

export function componentRender (component: React.ReactNode, options: componentRenderOptions = {}) {
    const { route = '/', initialState } = options

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>

    )
}
