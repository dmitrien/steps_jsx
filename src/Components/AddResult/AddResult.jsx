import React from 'react';
import { useState } from 'react';
import './AddResult.css'

export function AddResult({ addResult, updateResult }) {
    const initinalFormState = {id: null, date: '', distance: ''};
    const [result, setResult] = useState(initinalFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setResult({ ...result, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const regexDate = /^\d{2}\.\d{2}\.\d{4}$/;
        const regexDistance =/^\d+\.\d{3}$/;
        if (!result.date || !result.distance) {
            return alert('Заполните все поля!');
        } else if (!regexDate.test(result.date)) {
            return alert('Введите дату в формате дд.мм.гггг! Пример 12.05.2004');
        } else if (!regexDistance.test(result.distance)) {
            return alert('Введите дистанцию в экспоненциальном формате! Пример 14.005 км')
        } else {
            setResult(initinalFormState);
            addResult(result);
            updateResult(result);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <span className='title-date'>Дата (ДД.ММ.ГГ)</span>
            <input
                type='text'
                name='date'
                value={result.date}
                onChange={handleInputChange}
            />
            <span className='title-distance'>Пройдено км</span>
            <input
                type='text'
                name='distance'
                value={result.distance}
                onChange={handleInputChange}
            />          
            <button className='add-result'>OK</button>
        </form>
    )
}

