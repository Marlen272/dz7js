import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage3RequestMade } from './store';
import axios from 'axios';

const Page3 = () => {
    const dispatch = useDispatch();

    const handleRequest = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
            .then((response) => {
                console.log(response.data);
                dispatch(setPage3RequestMade());
                alert('Запрос успешно отправлен на третьей странице!');
            })
            .catch((error) => {
                console.error('Ошибка при отправке запроса:', error);
            });
    };

    return (
        <div>
            <h1>Page 3</h1>
            <p>Это текст на третьей странице. Нажмите кнопку ниже, чтобы отправить запрос.</p>
            <button onClick={handleRequest}>Отправить запрос</button>
        </div>
    );
};

export default Page3;
