import { useEffect, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/redux'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>

    )
}

export default ProfilePage
