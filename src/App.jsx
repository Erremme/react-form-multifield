import { useState } from "react"

export default function App(){
 const [bookList , setBookList] = useState([])

 const [formData , setFormData] = useState({
  autore : "",
  libro : "",
  argomento : ""
});

 const handleFormDataField = (fieldName , value) =>{
    setFormData( (currentFormData ) => ({...currentFormData, [fieldName] : value}))
 }

 const handleChange = (event) => {
  setSelectedValue(event.target.value);
};

 const onSubmit = (e) =>{
   e.preventDefault()
   setBookList((currentBookList) => [...currentBookList , formData])
   setFormData ({
    autore : "",
    libro : "",
    argomento : ""
   })
 }


  return(
    <div className="container">
      <h1>LISTA DEI LIBRI</h1>
      <ul>
        {bookList.map((item, index) => {
          return(
              <li key={index}> {item.autore} -{item.libro} - {item.argomento}</li>
          )
        })}
      </ul>

      <h3>Aggiungi un Libro</h3>

      <form onSubmit={onSubmit} >
        <input type="text" placeholder="Aggiungi Autore" value={ formData.autore} onChange={(e) => handleFormDataField("autore" , e.target.value)}/>
        <input type="text" placeholder="Aggiungi Libro" value={formData.libro} onChange={(e) => handleFormDataField("libro" , e.target.value)} />
        <select value = {formData.argomento} onChange={(e) => handleFormDataField("argomento" , e.target.value)}>
          <option>Seleziona</option>
          <option value ="FrontEnd">FrontEnd</option>
          <option value ="BackEnd">BackEnd</option>
          <option value ="UI/UX"> UI/UX</option>
        </select>
        <p>Valore selezionato: {formData.argomento}</p>
        <button type="submit">Invia</button>
      </form>
    </div>
  )
}
