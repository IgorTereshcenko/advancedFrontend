import { useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/redux'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {

    const { t } = useTranslation()
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')}/>
            {readonly
                ? (
                    <Button
                        theme='outline'
                        className={cls.editBtn}
                        onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            theme='outline_red'
                            className={cls.editBtn}
                            onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>

                        <Button
                            theme='outline'
                            className={cls.saveBtn}
                            onClick={onSaveEdit}>
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    )
}
