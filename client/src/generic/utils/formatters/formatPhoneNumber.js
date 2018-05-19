export default (value) => (
  value.toString().replace(/\s/g, '').replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
);
