interface Props {
    items: string[];
    onClickItem: (item: string) => void
}

function ListGroup({ items, onClickItem }: Props) {
    // const items = ["react", "SD", "leetcode"]
    // items.map(item => <li>{item}</li>)

    // const handleClick = (item: string) => {
    //     console.log(item)
    // }
    
    return (
        <>
            <h1>to do list</h1>
            <ul>
                {items.map((item) => {
                    // return <li key={item} onClick={() => handleClick(item)}>{item}</li>
                    return <li key={item} onClick={() => onClickItem(item)}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default ListGroup