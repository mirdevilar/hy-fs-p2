const AddPerson = ({newName, newNumber,
  handleNameUpdate, handleNumberUpdate, handleSubmitPerson}) => {
    
  return (
  <form>
    <div>
    name: 
    <input 
      onChange={handleNameUpdate}
      value={newName}
    />
    <br />
    number:
    <input
      onChange={handleNumberUpdate}
      value={newNumber}
    />
    </div>
    <div>
    <button onClick={handleSubmitPerson} type="submit">add</button>
    </div>
  </form>
  )
}

export default AddPerson