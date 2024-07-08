import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage1RequestMade } from './store';
import axios from 'axios';

const Page1 = () => {
    const dispatch = useDispatch();

    const handleRequest = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                console.log(response.data);
                dispatch(setPage1RequestMade());
                alert('Запрос успешно отправлен на первой странице!');
            })
            .catch((error) => {
                console.error('Ошибка при отправке запроса:', error);
            });
    };

    return (
        <div>
            <h1>Page 1</h1>
            <p>Это текст на первой странице. Нажмите кнопку ниже, чтобы отправить запрос.</p>
            <button onClick={handleRequest}>Отправить запрос</button>
        </div>
    );
};

export default Page1;
