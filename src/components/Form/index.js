import Button from 'components/Button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { createShortLink, selectLoading } from 'store/slice/linkSlice'
import { useDispatch, useSelector } from 'react-redux'


function Form() {
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onSubmit'
    })

    const onSubmit = ({ url }) => {
        dispatch(createShortLink(url))
        reset()
    }

    return (
        <section >
            <form
                autoComplete='off'
                onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='url'
                    placeholder="Shorten a link here..."
                    {...register('url', {
                        required: 'Prease add a link',
                        pattern: {
                            value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
                            message: 'Please enter a valid url',
                        }
                    })}
                    style={{
                        outlineColor: errors.url ? 'red' : ' green',
                        outlineWidth: errors.url ? '4px' : '1px'
                    }}
                    disabled={loading === 'loading'}
                />
                <Button
                    type="submit"
                >
                    Shorten it!
                </Button>
                {errors.url && (
                    <div>
                        {errors.url.message}
                    </div>
                )}
            </form>
        </section>
    )
}

export default Form