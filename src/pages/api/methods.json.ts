export const get: APIRoute = ({ params, request }) => {
    return {
      body: JSON.stringify({
        message: "This was a GET!"
      })
    }
  };
  
  export const post: APIRoute = ({ params, request }) => {
    return {
      body: JSON.stringify({
        message: "This was a POST!" + params + request
      })
    }
  }
  
  export const del: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: "This was a DELETE!"
      })
    }
  }
  
  export const all: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: `This was a ${request.method}!`
      })
    }
  }