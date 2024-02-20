const API = 'http://192.168.0.12:3000/tasks' //http://localhost:3000/tasks

export const getTasks = async () => {
    const res = await fetch(API)
    return await res.json()
}
