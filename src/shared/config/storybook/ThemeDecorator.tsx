import { type StoryFn } from '@storybook/react'
import { ThemeProvider, type Theme } from 'app/providers/themeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story/>
            </div>
        </ThemeProvider>
    )
}
