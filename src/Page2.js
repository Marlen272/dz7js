import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage2RequestMade } from './store';
import axios from 'axios';

const Page2 = () => {
    const dispatch = useDispatch();

    const handleRequest = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then((response) => {
                console.log(response.data);
                dispatch(setPage2RequestMade());
                alert('Запрос успешно отправлен на второй странице!');
            })
            .catch((error) => {
                console.error('Ошибка при отправке запроса:', error);
            });
    };

    return (
        <div>
            <h1>Page 2</h1>
            <p>Это текст на второй странице. Нажмите кнопку ниже, чтобы отправить запрос.</p>
            <button onClick={handleRequest}>Отправить запрос</button>
        </div>
    );
};

export default Page2;
