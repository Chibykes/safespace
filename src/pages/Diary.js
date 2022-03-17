import {FaArrowLeft, FaSearch, FaCalendar, FaCaretLeft, FaCaretRight, FaPencilAlt, FaTrashAlt, FaPlus} from 'react-icons/fa';
import {FiSend} from 'react-icons/fi';

const styles = {
    h1: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "purple",
        textAlign: "center"
    },
    wrapper: {
        display: "block",
        padding: '1.5rem'
        
    },
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "between",
        gap: "10px"
    },
    searchDateBox: {
        background: "#eee",
        padding: ".5rem 2rem",
        borderRadius: "999px",
    },
    gray: {
        color: "#999"
    },
    input: {
        display: "block",
        background: "none",
        outline: "none",
        textAlign: "center",
        border: "none",
        color: "#555",
        width: "100%"
    },
    line: {
        background: "lightblue",
        width: "1px",
        height: "999px",
        margin: "auto",
    },
    icon: {
        display: "grid",
        placeContent: "center",
        background: "#eee",
        height: "20px",
        width: "20px",
        padding: "5px",
        borderRadius: "999px",
        fontSize: "11px",
    },
    button: {
        position: "fixed",
        bottom: "5rem",
        right: "15px",
        display: "grid",
        placeContent: "center",
        background: "purple",
        height: "50px",
        width: "50px",
        padding: "5px",
        borderRadius: "999px",
        fontSize: "20px",
        boxShadow: "0 0 15px #3337"
    }
}

const minDate="20/02/2022";
const maxDate="27/02/2022";

const dummy_diary = [
    {
        day: "20",
        month: "feb",
        time: "8:30 am",
        content: "What is life all about?",
    },
    {
        day: "21",
        month: "feb",
        time: "8:30 am",
        content: "Thank God for today",
    },
    {
        day: "22",
        month: "feb",
        time: "8:30 am",
        content: "Things are getting better",
    },
    {
        day: "23",
        month: "feb",
        time: "8:30 am",
        content: "I'm just hopeful",
    },
]

const colors = ['#add8e6','#ebc8c8','#c8ebe8','#ebdcc8'];
let c_i = 0;
const colorChange = (index) => {
    if(index > 3){
        index = index - 1;
    }
    c_i = index % 4;
    return colors[c_i];
}


const Diary = () => {
    return(
        <>

        <div style={styles.wrapper}>
            {/* Header */}
            <div className="flex-box" style={styles.flex}>
                <div className="">
                    <FaArrowLeft />
                </div>
                <div className="" style={{width: '100%'}}>
                    <h1 className="" style={styles.h1}>Diary</h1>
                </div>
            </div>

            {/* Seacrh By Date */}
            <div className="">
                <div className="" style={{...styles.flex, ...styles.searchDateBox}}>
                    <FaSearch style={styles.gray} />
                    <div className="" style={{width: '100%'}}>
                        <input className="" style={{...styles.input}} placeholder="Search by date (dd/mm/yyyy)" />
                    </div>
                    <FaCalendar style={styles.gray} />
                </div>
            </div>

            {/* Current Search Criteria */}
            <div className="" style={{...styles.flex, fontSize: ".8rem", fontWeight: "bold", justifyContent: "center", textAlign: "center", margin: "20px auto"}}>
                <FaCaretLeft />
                <div className="" style={styles.flex}>
                    <p className="">{minDate}</p>
                    <p className="">-</p>
                    <p className="">{maxDate}</p>
                </div>
                <FaCaretRight />
            </div>

            {/* Diary */}
            <div className="diary-container">

                {dummy_diary.map(({day,time,month,content}, index) => {
                    return(
                        <div className="day" style={{...styles.flex, alignItems: 'flex-start', maxHeight: "140px", overflow: "hidden", paddingTop: "2px"}}>
                            <div className="" style={{fontSize: "1.2rem", display: "flex", flexDirection: "column"}}>
                                <span style={{display: "block", color: "purple"}}>{day}</span>
                                <span style={{display: "block", color: "purple", textTransform: "capitalize"}}>{month}</span>
                                <div style={styles.line}></div>
                            </div>

                            <div className="" style={{paddingBottom: "20px", width: "100%", fontSize: "14px"}}>
                                <div className="" style={{background: colorChange(index), padding: "1rem", borderRadius: "20px"}}>
                                    <p className="" style={{ color: "#999", margin: 0}}>{time}</p>
                                    <p className="" style={{margin: 0, color: "#000", paddingTop: "5px", fontWeight: "600"}}>{content}</p>
                                    <div className="" style={{...styles.flex, justifyContent: "flex-end", paddingTop: "10px"}}>
                                        <div style={styles.icon}><FaPencilAlt /></div>
                                        <div style={styles.icon}><FaTrashAlt /></div>
                                        <div style={styles.icon}><FiSend /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>

            {/* Add Button */}
            <div className="" style={styles.button}>
                <FaPlus style={{color: "#fff"}} />
            </div>

        </div>

        </>
    );
}

export default Diary;