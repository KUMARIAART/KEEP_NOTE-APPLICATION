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
        <>
            <form>

                <label>Note Detail:
                    <textarea value={note} onChange={(e) => setNote(e.target.value)} />
                </label><br />

                <label>Due Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label><br />

                <label>Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Personal notes">Personal notes</option>
                        <option value="Office notes">Office notes</option>
                        <option value="Travel notes">Travel notes</option>
                    </select>
                </label><br />

                <button onClick={() => { addYourNotes(note, date, category) }}>Add Note</button>
            </form>
        </>
    );
}
export default AddNote;