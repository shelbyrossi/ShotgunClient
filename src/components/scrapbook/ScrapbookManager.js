
  export const getScrapbooks = () => {
	return fetch("http://localhost:8000/scrapbooks", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  export const deleteScrapbook = (scrapbookId) => {
	return fetch(`http://localhost:8000/scrapbooks/${scrapbookId}`, {
	  method: "Delete",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
	  },
	})
  }

  export const createScrapbook = (scrapbook) => {
	return fetch("http://localhost:8000/Scrapbooks", {
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
	return fetch(`http://localhost:8000/Scrapbooks/${scrapbook.id}`, {
	  method: "PUT",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(scrapbook)
	})
  }

  export const getScrapbook = (ScrapbookId) => {
    return fetch(`http://localhost:8000/Scrapbooks/${ScrapbookId}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
  }  