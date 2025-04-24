
interface JobsCardProp {
    position: string,
    location: string,
    department: string,
    about: string,
    qualifications: string[]
}

const JobsCard: React.FC<JobsCardProp> = ({ position, location, department, about, qualifications }) => {

    return (
        <>
            <div>
                <div>
                    <h5>
                        {position}
                    </h5>
                    <div>
                        <p>location : {location}</p>
                        <p>department : {department}</p>
                    </div>
                </div>
                <div>
                    <h6>
                        about this job
                    </h6>
                    <p>{about}</p>
                </div>
                <div>
                    <h6>
                        requirements & qualifications
                    </h6>
                    <ul>
                        {
                            qualifications.map( ( value, index ) => (
                                <li key={index} >
                                    {value}
                                </li>
                            ) )
                        }
                    </ul>
                </div>
                <div>
                    <button> Apply now</button>
                </div>
            </div>
        </>
    )
}

export default JobsCard;