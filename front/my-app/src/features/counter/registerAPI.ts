import axios from 'axios'

export function register(user: any) {
    console.log(user);
    return new Promise<{ data: any }>((resolve) =>
        axios.post("http://127.0.0.1:8000/register/", user).then(res => resolve({ data: res.data }))
    );
}
