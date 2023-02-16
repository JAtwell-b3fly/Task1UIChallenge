import data from './data';

const updateData = (field, value) => {
  data[field] = value;
  console.log(field + ": " + value)
};

export default updateData;
