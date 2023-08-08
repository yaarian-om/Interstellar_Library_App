import _Header  from "./header";
import _Footer  from "./footer";

export default function _Layout(props,{children}) {
  //  title = props.title;
  console.log("From Layout = ", props.title)
  return (
    <>
      <_Header title= {props.title} />
      <div className="main">{children}</div>
      <_Footer/>
      

    </>
  );
}
