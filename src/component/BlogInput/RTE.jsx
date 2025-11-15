import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {
                label && <label>{label}</label>
            }

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        init={
                            {
                                height: 500,
                                menubar: true,
                                plugins: [

                                ],
                                toolbar: ""
                            }
                        }
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

export default RTE