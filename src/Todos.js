import React from 'react'

const Todos = ({todos,deleteItem}) => {

    const  todoList= todos.length ? (
        todos.map(el =>{
        return(
            <div className='collection-item' key={el.id}>

                <div onClick={()=> {deleteItem(el.id)}}>
                  <span  > {el.content} </span>
                </div>

            </div>
        )
        })
    ) :(

        <p className='center'> You have no Todo's left </p>

    )


    return(
    <div className="todos collection" >
        {todoList}
    </div>
    )
}

export default Todos