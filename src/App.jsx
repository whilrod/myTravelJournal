import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

function App() {
  const entries = data.map((entry) =>{
    console.log(entry)
    return (
      <Entry 
        // img={{
        //   src: entry.img.src,
        //   alt: entry.img.title
        // }}
        key={entry.id}
        {...entry}
        //entry={entry}
        // key={entry.id}
        // img={entry.img}
        // title={entry.title}
        // country={entry.country}
        // googleMapsLink={entry.googleMapsLink}
        // dates = {entry.dates}
        // text = {entry.text}
      />
    )
  })
  return (
    <>
      <Header />
      <main className="container">
        {entries}
      </main>
    </>
  )
}

export default App
