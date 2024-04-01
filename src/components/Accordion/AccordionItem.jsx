import { createContext, useContext } from "react"
import { useAccordionContext } from "./Accordion"

const AccordionItemContext = createContext()

export function useAccordionItemCtx(){
    const context = useContext(AccordionItemContext)
    if(!context) {
        throw new Error('You must wrap an element inside AccordionItem context for use this context')
    }
    return context
}

export default function Item({ className, children, id }) {
    return (
        <AccordionItemContext.Provider value={{id}}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
    )
}

function AccordionTitle({ className, children }) {
    const { toggleItem } = useAccordionContext()
    const {id} = useAccordionItemCtx()
    return (<h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>)
}

function AccordionContent({className, children}) {
    const {openItemId} = useAccordionContext()
    const {id} = useAccordionItemCtx()
    const isOpen = openItemId === id

    return (
        <div className={isOpen ? `${className ?? ''} open`: `${className ?? ''} close`}>
            {children}
        </div>
    )
}

Item.Title = AccordionTitle
Item.Content = AccordionContent