
const LicensesType = ({ licensesType, setLicensesType }) => {

    const toggleLicensesType = (type) => {
        if (licensesType.includes(type)) {
            setLicensesType(licensesType.filter(item => item !== type));
        }
        else {
            setLicensesType([...licensesType, type]);
        }
    }

    return <div className="licenses">
        <h3>Use</h3>
        <div className="list">
            <div className="single">
                <label htmlFor='commercial'>
                    <span>
                        <input type='checkbox' id='commercial' onClick={() => toggleLicensesType('commercial')} />
                    </span>
                    <div className="text">
                        Use commercially
                    </div>
                </label>
            </div>
            <div className="single">
                <label htmlFor='modification'>
                    <span>
                        <input type='checkbox' id='modification' onClick={() => toggleLicensesType('modification')} />
                    </span>
                    <div className="text">
                        Modification
                    </div>
                </label>
            </div>
        </div>
    </div>
}
export default LicensesType;