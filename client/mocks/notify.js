/*
  request: { id, action }
*/

export default (request) => {
  const { id } = request;

  if (id === 'NOTICE_ERROR') {
    return {
      status: 'NOT-OK'
    }
  }

  return {
    status: 'OK'
  };
};
