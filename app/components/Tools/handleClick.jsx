const handleClick = (event, func) => {
  event.preventDefault();
  event.stopPropagation();
  func();
};

export default handleClick;
