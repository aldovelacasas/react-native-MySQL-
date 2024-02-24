// const API = 'http://192.168.0.12:3000/tasks' //http://localhost:3000/tasks

// export const getTasks = async () => {
//     const res = await fetch(API)
//     return await res.json()
// }

// export const updatingTask = async (id) => {
//     const res = await fetch(`${API}/${id}`)
//     return await res.json()
// }
// export const saveTask = async (newTask) => {
//     const res = await fetch(API, {method: "POST",
//      headers: {Accept: "application/json", "Content-Type": "application/json"},
//      body: JSON.stringify(newTask)
    
//     })
//     return await res.json()

// }
// export const deleteTask = async (id) => {
//     await fetch(`${API}/${id}`, {method: "DELETE"})
// }

// export const updateTask = async ( id, newTask) => {
//     const res = await fetch(`${API}/${id}`, {method: "PUT",
//      headers: {Accept: "application/json", "Content-Type": "application/json"},
//      body: JSON.stringify(newTask)
    
//     })
//     return res;
// }

let API = 'http://192.168.0.12:3000/tasks'; // URL de desarrollo

if (process.env.NODE_ENV === 'production') {
  // Si está en producción, usa la URL del servidor de producción
  API = 'https://backmovilnative-lczyuwq1v-aldovelacasas.vercel.app/';
}

export const getTasks = async () => {
  const res = await fetch(API);
  return await res.json();
}

export const updatingTask = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
}

export const saveTask = async (newTask) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  });
  return await res.json();
}

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
}

export const updateTask = async (id, newTask) => {
  const res = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  });
  return res;
}
