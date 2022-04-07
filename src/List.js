const ListItems = (props) =>{
    return(
        <div style={{textAlign:'left',width:'100%',paddingLeft:'50px'}}>
        <ul style={{fontSize:'20px',fontWeight:'700'}} >{props.heading}</ul>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
        <li>{props.li3}</li>
        {/* <li>{product(10,10)}</li> */}
        <li>{props.li4}</li>
        </div>
    )
}

export const Bttn = (props) =>{
    return ( 
    <button style={{color:'white',padding:'5px 10px',borderRadius:'10px',border:'none',margin:'10px 3px',backgroundColor:`${props.bgcolor}`}}>{props.name}</button>
    )
}

export default ListItems