import { useRef, useState } from "react"

export default function SearchableList({children, items}) {
    const timeRef = useRef(null)
    const [searchTearm, setSearchTerm] = useState('')
    const array = []
            for (let index = 0; index < 20000000; index++) {
                array.push(index);
            }

    function handleChange(event) {
        
        if(timeRef.current) {
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            setSearchTerm(event.target.value)
        }, 800)
    }

    return <div className="searchable-list">
        <input type="search" placeholder="Search" onChange={handleChange}/>
        {children(items, searchTearm)}
    </div>
}