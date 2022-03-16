
export const getUsers= () => {
	return fetch("http://localhost:8000/users", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const getUserById = (usersId) => {
	return fetch(`http://localhost:8000/users/${usersId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}


export const getThisUser = (token) => {
	return fetch(`http://localhost:8000/users/${token}`, {
        headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
    
}