import { useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { addCommentFormError, addCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from 'shared/lib/hooks/redux'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface AddCommentFormProps {
    className?: string
    onSendComment?: (text: string) => void
}

const reducers: ReducersList = {
    addCommemtForm: addCommentFormReducer
}

const AddCommentForm: FC<AddCommentFormProps> = ({ className, onSendComment }) => {

    const { t } = useTranslation()
    const text = useSelector(addCommentFormText)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const error = useSelector(addCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        if (onSendComment) {
            onSendComment(text || '')
        }
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}/>
                <Button onClick={onSendHandler} theme='outline'>{t('Отправить')}</Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default AddCommentForm
