import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {

        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options ? options.map((o,i)=>(

        <option className={s.option} key={o + '-' + i} value={o}>{o}</option>
    )) : []
    debugger
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }

    return (
        <select onChange={onChangeCallback} {...restProps} className={s.select}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
