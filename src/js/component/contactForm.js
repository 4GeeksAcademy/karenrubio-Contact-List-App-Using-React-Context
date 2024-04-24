import React,{useState , useEffect , useContext} from "react"
import { useNavigate, useParams,Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {Contacts} from "./contacts"


const ContactForm = () =>{ 
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({})
    const navigate = useNavigate()
    const params = useParams()

    const handleSubmit = async () => {
        let response;
        if (!params.id){
            response = await actions.addContact(contact)
        } else{
            response = await actions.editContact(contact, params.id)
        }
        if(response){
            navigate("/")
            return true
        }
        return false

    }

    useEffect(() => {
        setContact({name: '', email: '', phone: '', address: ''})
        if(params.id){
            setContact(store.contacts.find(contact => contact.id == params.id))  
        }
    },[params])
     
    return(
        <>
            <nav className="navbar navbar-light m-5">
			<div className="ml-auto">
            <Link to="/">
				<span className="navbar-brand mb-0 h1">Back to Agenda</span>
			</Link>
			</div>
		    </nav>
			
            <form className="container">
            <h1>{!params.id ? "Add a new contact" : "Edit contact " + params.id}</h1>
            <div className="form-floating mb-3">
                <input onChange={(e) => setContact({...contact, name: e.target.value}) } type="text" className="form-control" name="name" value={contact?.name} id="inputName" placeholder="Enter Name"/>   
                <label for="inputName">name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e) => setContact({...contact, email: e.target.value})} type="email" className="form-control" name="email" value={contact?.email} id="inputEmail" placeholder="Enter Email"/>
                <label for="inputEmail" >Email</label>        
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e) => setContact({...contact, phone: e.target.value})} value={contact?.phone} name="phone" type="number" className="form-control" id="inputPhone" placeholder="Enter Phone"/>
                <label for="inputPhone">Phone</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e) => setContact({...contact, address: e.target.value})} value={contact?.address} name="address" type="text" className="form-control" id="inputAddress" placeholder="Enter Address"/>
                <label for="inputAddress" className="col-sm-2 col-form-label">Address</label>  
            </div>
            <div className="">
                <button onClick={() => handleSubmit()} type="submit" className="btn btn-primary">Save</button>
            </div>
            </form>
            <h1></h1>
            
        </>

    )
}



export default ContactForm