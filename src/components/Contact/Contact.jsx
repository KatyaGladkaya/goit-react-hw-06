import styles from './Contact.module.css'
const Contact = ({ name, number,id, onDelete }) => {
    return (
        <li className={styles.item}>
            <p>
                {name}:<br/> {number}
            </p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
};
export default Contact;