import PropTypes from 'prop-types';
export default function List({items=[],category="Items"}){
  //const fruits=[{id:1, name:"apple", calories:95},{id:2,name:"orange", calories:50},{id:3,name:"banana", calories:120},{name: "tomato" ,calories:60, id:4},{id:5, name:"coconut", calories:195}]
  const listItems=items.map(fruit=> <li key={fruit.id} >{fruit.name}: <b>{fruit.calories} cals </b> </li>);
  
  return(<div style={{backgroundColor:"grey", borderRadius:"7px", padding:20, marginTop:10, marginLeft:-10, marginRight:-10, textAlign:"center", cursor:"pointer"}}><h3>List of {category}</h3><ol>{listItems}</ol></div>);
}
List.propTypes={
   category:PropTypes.string,
   items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    name:PropTypes.string,
    calories:PropTypes.number
  })) 
}



const fruits=[{id:1, name:"apple", calories:95}, 
    {id:2,name:"orange", calories:50},
    {id:3,name:"banana", calories:120},
    {id:4, name: "tomato" ,calories:60},
    {id:5, name:"coconut", calories:195}
    
  ]

  const vegetables=[
    {id:1, name:"Potato", calories:195}, 
    {id:2,name:"Corn", calories:250},
    {id:3,name:"Spinach", calories:120},
    {id:4, name: "tomato" ,calories:60},
    {id:5, name:"Brocolli", calories:45}
  ]
  return(
    <>
      {fruits.length>0 ? <List items={fruits} category="Fruits"></List> : <p>No Items Here!</p>}
      <List items={vegetables} category="Veggies" ></List>
    </>
  )
