import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { deleteContact } from './../../store/actions/contactAction';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>
                <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contact/edit/${id}`}>
                    <span className="material-icons mr-2">edit</span>
                </Link>

                <span className="material-icons text-danger delete-btn" onClick={()=> dispatch
                (deleteContact(id))}>remove_circle</span>

            </td>
        </tr>
    )
}

export default Contact
