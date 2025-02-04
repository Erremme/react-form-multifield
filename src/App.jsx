import { useState } from "react"

export default function App(){
 const [bookList , setBookList] = useState([])

 const [formData , setFormData] = useState({
  autore : "",
  libro : "",
  argomento : "",
  available : false
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
    argomento : "",
    available : false
   })
 }

   const handDelete = (booksToDelelete , index) => {
    setBookList((currenState) => currenState.filter((book) => booksToDelelete !== book))
   }


  return(
    <div className="container">
      <h1>LISTA DEI LIBRI</h1>
      <ul className="book-list">
        {bookList.map((item, index) => {
          return(
              <li className=" .book-item" key={index}> 
              <h3 className="book-author">{item.autore}</h3> 
              <h4 className="book-title">{item.libro}</h4>
              <h5 className="book-genre"> {item.argomento} </h5> 
              <h6 className="book-availability">{item.available ? "Disponibile" :"Non disponibile"}</h6>
              <button className="remove-button" onClick={ () => handDelete(item)}>X</button>
              </li>
          )
        })}
      </ul>

      

      <form className="book-form" onSubmit={onSubmit} >
      <h3 className="book-form">Aggiungi un Libro</h3>
        <input type="text" placeholder="Aggiungi Autore" value={ formData.autore} onChange={(e) => handleFormDataField("autore" , e.target.value)}/>
        <input type="text" placeholder="Aggiungi Libro" value={formData.libro} onChange={(e) => handleFormDataField("libro" , e.target.value)} />
        <select value = {formData.argomento} onChange={(e) => handleFormDataField("argomento" , e.target.value)}>
          <option>Seleziona</option>
          <option value ="FrontEnd">FrontEnd</option>
          <option value ="BackEnd">BackEnd</option>
          <option value ="UI/UX"> UI/UX</option>
        </select>
        <p>Valore selezionato: {formData.argomento}</p>
        <label htmlFor="pabblicato"> Non/Disponibile</label>
        <input id="pabblicato" type="checkbox" value = {formData.available} onChange={(e) => handleFormDataField("available" , e.target.checked)} /> <br />
        <button type="submit">Invia</button>
      </form>
    </div>
  )
}
