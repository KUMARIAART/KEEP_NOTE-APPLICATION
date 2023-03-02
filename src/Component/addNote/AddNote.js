import  React ,{ useState } from 'react';
const AddNote = () => {
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    function addYourNotes(note, date, category) {
        let obj = { "note": note, "date": date, "category": category }
        console.log(obj)
        fetch("http://localhost:3000/Notes", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }).then(res => {
            return res.json()
        }).then(res1 => {
            console.log(res1)
        })
    }
    return (
        
        <div id='firstDiv'>
            <b><h1>Note's Details Bellow</h1></b> <br/>
            <form>

                <label><b>Note Detail:-</b>
                    <textarea value={note} onChange={(e) => setNote(e.target.value)} /><br />
                </label><br />

                <label><b>Due Date:-</b>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    /><br />
                </label><br />

                <label><b>Category:-</b>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Personal notes">Personal notes</option>
                        <option value="Office notes">Office notes</option>
                        <option value="Travel notes">Travel notes</option>
                    </select><br />
                </label> <br /> <br /> <br/>

                <button onClick={() => { addYourNotes(note, date, category) }}>Add Note</button>
            </form>
        </div>
    );
}
export default AddNote;