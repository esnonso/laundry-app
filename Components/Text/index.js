export const H1Tags = (props) => {
  const h1Styles = {
    margin: props.margin || 0,
    fontStyle: props.font,
    color: props.color || "#011F4B",
    fontSize: props.fontSize,
    padding: props.padding,
    boxSing: "border-box",
    fontWeight: props.fontWeight,
    textAlign: props.textAlign,
    backgroundColor: props.back,
    width: props.width,
  };
  return (
    <h1 style={h1Styles} className="mobile">
      {props.children}
    </h1>
  );
};

export const PTags = (props) => {
  const pStyles = {
    margin: props.margin || 0,
    fontStyle: props.font,
    fontSize: props.fontSize,
    color: props.color || "#011F4B",
    padding: props.padding,
    fontWeight: props.fontWeight,
    textAlign: props.textAlign,
    width: props.width,
    backgroundColor: props.back,
    borderRadius: props.radius,
    borderBottom: props.borderBottom,
  };
  return (
    <p style={pStyles} className="mobile">
      {props.children}
    </p>
  );
};
