export const getScrapbookTags = () => {
	return fetch("http://localhost:8000/scrapbooktags", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }