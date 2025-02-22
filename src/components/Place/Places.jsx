export default function Place({ items, searchTearm, itemKeyFn }) {

  const searchItems = items.filter(item => item.title.toLowerCase().includes(searchTearm))
  return (
    <ul>
      {searchItems.map(item => (
        <li key={itemKeyFn(item)}>
          <article className="place">
            <img src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>

  );
}