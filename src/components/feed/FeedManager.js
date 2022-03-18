export const getScrapbookTags = () => {
	return fetch("http://localhost:8000/scrapbooktags", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  export const getScrapbooks = () => {
	return fetch("http://localhost:8000/scrapbook", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }