import Accordion from "./components/Accordion/Accordion";
import ImagesList from './components/ImagesList'
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Places from "./components/Place/Places";
import Item from "./components/Accordion/AccordionItem";



const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function TextItem({ items, searchTearm, itemKeyFn }) {
  const filterItems = items.filter(item => item.toLowerCase().includes(searchTearm.toLowerCase()))
  return (
    <ul>
      {filterItems.map(item => (
        <li key={itemKeyFn(item)}>
          {item}
        </li>
      ))}
    </ul>
  )
}

function NumberItem({ items, searchTearm, itemKeyFn }) {
  const filterItems = items.filter(item => item >= Number(searchTearm))
  return (
    <ul>
      {filterItems.map(item => (
        <li key={itemKeyFn(item)}>
          {item}
        </li>
      ))}
    </ul>
  )
}

function App() {
  return <main>
    <section>
      <h2>Why work with us</h2>
      <Accordion className="accordion">
        <Accordion.Item
          className="accordion-item"
          id="experience"
        >
           <Accordion.Item.Title className="accordion-item-title">
            We got 20 years of experience
          </Accordion.Item.Title>
          <Accordion.Item.Content className="accordion-item-content" >
            <article>
              <p>You cannot go wrong with us.</p>
              <p>We are in the business of planning highly
                individualized vacation trips for more than 20 years.
              </p>
            </article>
          </Accordion.Item.Content >

        </Accordion.Item>
        <Item
          className="accordion-item"
          id="local-guides"
        >
          <Accordion.Item.Title className="accordion-item-title">
            We're workomg with local guides
          </Accordion.Item.Title>
          <Accordion.Item.Content className="accordion-item-content" >
            <article>
              <p>We are not doing this along our office.</p>
              <p>
                Instead, we are working with local guides nto ensure a safe and please vacation
              </p>
            </article>
          </Accordion.Item.Content>

        </Item>
      </Accordion>
    </section>
    <section>
      <header>
        <h3> Squirel implementation</h3>
      </header>
      <div className="App">
        <ImagesList />
      </div>
    </section>
   
    <section>
       
      <SearchableList items={PLACES} >
        {(items, searchTearm) => 
          <Places items={items} searchTearm={searchTearm} itemKeyFn={(item) => item.id} />
        }
      </SearchableList>
      <SearchableList items={['item 1', 'item 2', 'item 3', '44']}>
        {(items, searchTearm) =>
          <TextItem
            items={items}
            searchTearm={searchTearm}
            itemKeyFn={(item) => item}
          />
        }
      </SearchableList>
      
      <SearchableList items={[5,10,20,100,600,200]}>
      {(items, searchTearm) => (
        <>
          <p> Lista de numeros mayores o iguales a {searchTearm} </p>
          <NumberItem
              items={items}
              searchTearm={searchTearm}
              itemKeyFn={(item) => item}
            />
        </>
      )    }
      </SearchableList>
    </section>
  </main>
}

export default App;