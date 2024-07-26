export default function handleResponseFromAPI(promise) {

  const res = promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => Error());

  return res;
}
