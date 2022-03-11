
  export const getScrapbooks = () => {
	return fetch("http://localhost:8000/scrapbook", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  export const deleteScrapbook = (scrapbookId) => {
	return fetch(`http://localhost:8000/scrapbook/${scrapbookId}`, {
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
  

export const updateScrapbook = (scrapbook) => {
	return fetch(`http://localhost:8000/Scrapbook/${scrapbook.id}`, {
	  method: "PUT",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(scrapbook)
	})
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




export const getScrapbookByCurrentUser = (userId) => {
	return fetch(`http://localhost:8000/scrapbook?user_id=${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem('token')}`,
		}
	}).then((res) => res.json())
  }


  export const get_post_tags = (tagsId) => {
	return fetch(`http://localhost:8000/scrapbooktags?tags_id=${tagsId}`, {
		headers: {
			"Authorization": `Token ${localStorage.getItem('token')}`
		}
	}).then(res => res.json())
  }
