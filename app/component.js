export default (text = 'Hej på dig du!') => {
  const element = document.createElement('div');
  element.innerHTML = text;

  return element;
};
