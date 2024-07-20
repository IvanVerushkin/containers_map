import ErrorRepository from '../app';

const myErrors = new ErrorRepository(
    { code: 1000, description: 'Internal Server Error' },
    { code: 4040, description: 'Access Denied' },
    { code: 3333, description: 'Invalid request' },
);

test('нужно правильно перевести известную ошибку', () => {
    const recieved = myErrors.translate(4040);
    const expected = 'Access Denied';

    expect(recieved).toBe(expected);
});

test('возвращает сообщение о неизвестной ошибке', () => {
    const recieved = myErrors.translate(444);
    const expected = 'Unknown error';

    expect(recieved).toBe(expected);
});