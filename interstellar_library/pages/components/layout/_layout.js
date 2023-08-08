import _Header  from "./header";
import _Footer  from "./footer";


export default function _Layout({children}) {
  //  title = props.title;
  return (
    <>
      <_Header/>
      <div 
      className="main"
      >{children}</div>
      <_Footer/>
    </>
      

  );
}
