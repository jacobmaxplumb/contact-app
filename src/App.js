import axios from "axios";
import { useEffect, useState } from "react";

const initialFormValues = {
  fullName: "",
  email: "",
  city: "",
};

function App() {
  const [contacts, setContacts] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/contacts`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const addContact = async () => {
    const {data: contact} = await axios.post('http://localhost:9000/contacts', formValues);
    setFormValues(initialFormValues);
    setContacts([...contacts, contact]);
  }

  return (
    <div>
      <h1>Contact App</h1>
      <div>
        <input
          onChange={handleChange}
          name="fullName"
          value={formValues.fullName}
        />
      </div>
      <div>
        <input onChange={handleChange} name="email" value={formValues.email} />
      </div>
      <div>
        <input onChange={handleChange} name="city" value={formValues.city} />
      </div>
      <button onClick={addContact}>Add</button>

      {contacts.map((contact) => (
        <div key={contact.id}>
          {contact.fullName} - {contact.email} - {contact.city}
        </div>
      ))}
    </div>
  );
}

export default App;
