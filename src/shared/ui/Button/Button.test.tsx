import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('btn test', () => {
    test('наличие в документе', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('проверяем тему', () => {
        render(<Button theme='clear'>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
