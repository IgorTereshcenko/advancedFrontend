import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
/* import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading' */
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {

    const { t } = useTranslation('profile')

    const data = useSelector(getProfileData)
    /*  const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading) */

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')}/>
                <Button theme='outline' className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}/>
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}/>
            </div>
        </div>
    )
}
