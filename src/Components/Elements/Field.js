const Field = ({ label, value, values, toggleValue }) => {
    console.log(values);
    return <label htmlFor={value}>
        <span>
            <input type='checkbox' checked={values.includes(value)} id={value} onClick={() => toggleValue(value)} />
        </span>
        <div className="text">{label}</div>
    </label>
}
export default Field;