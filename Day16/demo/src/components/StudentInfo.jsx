
function StudentInfo(props){
    // console.log(props);
    return (
        <div>
            <h1>Student Name: {props.studentName} </h1>
            <p> Student Age: {props.studentAge} </p>
            <img style={{width:"350px"}} src={props.studentAvatar} alt="Student Avater" />
        </div>
    )
};

export default StudentInfo;