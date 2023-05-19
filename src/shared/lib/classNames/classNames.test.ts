import { classNames } from './classNames'

describe('classNames', () => {
    test('передаем только первый параметр', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('передаем additional класс без mods', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })
    test('c mods', () => {
        const expected = 'someClass class1 class2 scrollable hovered'
        expect(classNames('someClass',
            { scrollable: true, hovered: true },
            ['class1', 'class2']))
            .toBe(expected)
    })
    test('c mods false', () => {
        const expected = 'someClass class1 class2 scrollable'
        expect(classNames('someClass',
            { scrollable: true, hovered: false },
            ['class1', 'class2']))
            .toBe(expected)
    })
    test('c mods undefined', () => {
        const expected = 'someClass class1 class2 scrollable'
        expect(classNames('someClass',
            { scrollable: true, hovered: undefined },
            ['class1', 'class2']))
            .toBe(expected)
    })
})
