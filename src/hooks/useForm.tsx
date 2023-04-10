import { useState } from 'react'

export const useForm = <T extends Object>(initState: T) => {

    const [state, setState] = useState(initState);

    // What does K means? (Uso de genericos)
    // If I send an object, the value will be of type object.
    // If I send an array, the value will be of type array.
    // ... boolean ... boolean
    // ... string ... string
    const onChange = <K extends Object>(value: K, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange
    }
}