import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MyIcon.module.scss'

interface MyIconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const MyIcon: FC<MyIconProps> = memo(({ className, Svg }) => {
    return (
        <Svg className={classNames(cls.MyIcon, {}, [className])}>

        </Svg>
    )
})
