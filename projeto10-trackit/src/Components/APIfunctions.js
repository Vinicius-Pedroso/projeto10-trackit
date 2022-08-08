import axios from 'axios';

const AUTORIZATION = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth';
const HABIT_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

function sign_Up({ email, name, image, password }) {
    const promise = axios.post(`${AUTORIZATION}/sign-up`, { email, name, image, password })
    return promise;
}

function sendLogin({ email, password}) {
    const promise = axios.post(`${AUTORIZATION}/login`, { email, password })
    return promise.then((response) => {
        localStorage.setItem("User_Info", JSON.stringify(response.data))

    });
}

function createHeaders() {
  const auth = localStorage.getItem("User_Info");
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  };

  return config;
}

function createHabit(body) {
    const config = createHeaders();
    const promise = axios.post(`${HABIT_URL}`, body, config)
    return promise;
}

function listHabit(body) {
    const config = createHeaders();
    const promise = axios.get(`${HABIT_URL}`, body, config)
    return promise;
}

function deleteHabit(habit_id, body) {
    const promise = axios.post(`${HABIT_URL}/${habit_id}`, body)
    return promise;
}

function getHabitToday(){
    const promise = axios.get(`${HABIT_URL}/today`)
    return promise;
}

function habitCheck (habit_id, body){
    const promise = axios.post(`${HABIT_URL}/${habit_id}/check`, body)
    return promise;
}

function habitUncheck (habit_id, body){
    const promise = axios.post(`${HABIT_URL}/${habit_id}/uncheck`, body)
    return promise;
}

function getHabitDaily (){
    const promise = axios.get(`${HABIT_URL}/history/daily`)
    return promise;
}

export { sign_Up, sendLogin, createHabit, listHabit, deleteHabit, getHabitToday, habitCheck, habitUncheck, getHabitDaily};