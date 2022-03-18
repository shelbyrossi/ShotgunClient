
  export const getScrapbooks = () => {
	return fetch("http://localhost:8000/scrapbook", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  export const getScrapbookTags = () => {
	return fetch("http://localhost:8000/scrapbooktags", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  export const deleteScrapbookTag = (scrapbooktagsId) => {
	return fetch(`http://localhost:8000/scrapbooktags/${scrapbooktagsId}`, {
	  method: "Delete",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
	  },
	})
  }

  export const deleteScrapbook = (scrapbook) => {
	return fetch(`http://localhost:8000/scrapbook/${scrapbook}`, {
	  method: "Delete",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
	  },
	})
  }

  export const createScrapbook = (scrapbook) => {
	return fetch("http://localhost:8000/scrapbook" ,{
	  method: "POST",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(scrapbook)
	})
	  .then(res => res.json())
  }
  

export const updateScrapbook = (scrapbookId, scrapbook) => {
	return fetch(`http://localhost:8000/scrapbook/${scrapbookId}`, {
	  method: "PUT",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(scrapbook)
	})
  }

  export const getScrapbookTagById = (scrapbooktagsId) => {
    return fetch(`http://localhost:8000/scrapbooktags/${scrapbooktagsId}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
  }  

  export const getScrapbookById = (scrapbookId) => {
    return fetch(`http://localhost:8000/scrapbook/${scrapbookId}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
  }  

  export const getTags = () => {
    return fetch("http://localhost:8000/tags", {
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then((res) => res.json())
    

}

export const getImages = () => {
	return fetch("http://localhost:8000/images", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  
  export const getScrapbookTagsByTag= (id) => {
	return fetch(`http://localhost:8000/scrapbooktags?tag_id=${id}`, {
		headers: { 
			"Authorization": `Token ${localStorage.getItem("token")}`
		},
	})
		.then(res => res.json())
}

export const getUserById = (usersId) => {
	return fetch(`http://localhost:8000/users/${usersId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}


export const getScrapbookByCurrentUser = (userId) => {
	return fetch(`http://localhost:8000/scrapbook?user_id=${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem('token')}`,
		}	
	}).then((res) => res.json())	
  }  

 
   
export const getCurrentUser = () => {
    return fetch(`http://localhost:8000/users/currentuser`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
} 


