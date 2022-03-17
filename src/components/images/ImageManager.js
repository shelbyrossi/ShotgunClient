

  export const deleteImage = (imageId) => {
	return fetch(`http://localhost:8000/image/${imageId}`, {
	  method: "Delete",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
	  },
	})
  }

  export const createImage = (image) => {
	return fetch("http://localhost:8000/image", {
	  method: "POST",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(image)
	})
	  .then(res => res.json())
  }
  

  export const getImages= () => {
	return fetch("http://localhost:8000/image", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}


export const get_scrapbook_image = (scrapbookId) => {
	return fetch(`http://localhost:8000/image?scrapbook_id=${scrapbookId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const updateImage = (imageId, image) => {
	return fetch(`http://localhost:8000/image/${imageId}`, {
		method: "PUT",
		headers: {
			"Authorization": `Token ${localStorage.getItem("token")}`,
			'Content-Type': "application/json"
		},
		body: JSON.stringify(image)
	})
}

  export const getScrapbooks = () => {
	return fetch("http://localhost:8000/scrapbook", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }


export const getScrapbookByCurrentUser = (userId) => {
	return fetch(`http://localhost:8000/scrapbook?user_id=${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem('token')}`,
		}	
	}).then((res) => res.json())	
  }  

