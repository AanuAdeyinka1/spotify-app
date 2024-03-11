import whitesvg from './Asset/Images/whitesvg.svg'
import blacksvg from './Asset/Images/blacksvg.svg'

export function Logo(props){
   if (props.useWhite) {

    return(
        
        <a href ="#/dashboard">
        <img src = {whitesvg} /></a>
    )
  //  } else{
  //  return (
  //    <a href="#/dashboard">
  //      <img src={blacksvg} />
  //    </a>
  //  )
}
}