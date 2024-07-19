

export const getAllTodo = async () => {
    try {
        console.log(import.meta.env.URL)
        const response = await fetch(`${import.meta.env.VITE_URL}/all`, {
          method: 'GET'
        });
        const result = await response.json();
        return result.value;
  
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
}

export const deleteTodo = async (id) => {
    try {
        console.log('Deleting')
        const result = await fetch(`${import.meta.env.VITE_URL}/${id}`, {
          method: 'DELETE',
          headers: {
            'x-api-key' : import.meta.env.VITE_API_KEY
          }
        })
        console.log(result.status)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

export const completeTodo = async (id, completed) => {
  try {
      const document = {'_id' : id , 'completed' : completed}
      console.log(`${id} : ${completed}`)
      const result = await fetch(import.meta.env.VITE_URL, {
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json',
          'x-api-key' : import.meta.env.VITE_API_KEY
        },
        body : JSON.stringify(document)
      })
      console.log(result.status)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

