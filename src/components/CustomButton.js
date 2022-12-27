function CustomButton(props) {
  const {
    color,
    onClick,
    children,
    margin,
    width,
    height,
    border,
    borderRadius,
  } = props;
  if (color) {
    return (
      <button
        style={{
          backgroundColor: color,
          color: "black",
          margin: margin,
          width: width,
          height: height,
          border: border,
          borderRadius: borderRadius,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default CustomButton;
