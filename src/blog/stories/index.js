import Blog1 from './5-years-in';

const stories = [
  Blog1
];

export default stories.reduce((acc, val) => {
  acc[val.slug] = val;
  return acc;
}, {});