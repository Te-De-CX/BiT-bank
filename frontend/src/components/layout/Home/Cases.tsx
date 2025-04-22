
const Cases = () => {

    const cases = [
        { id: 1, text: "manageing personal finances" },
        { id: 2, text: "Saving for the Future" },
        { id: 3, text: "Homeownership" },
        { id: 4, text: "Education Funding" },
    ]

    const percent = [
        { id: 1, numb: 78, text: "Secure Retirement Planning"  },
        { id: 2, numb: 63, text: "Manageable Debt Consolidation"  },
        { id: 3, numb: 91, text: "Reducing financial burdens"  }
    ]

    return (
        <>
            <section>
                <div>
                    <h4>use cases</h4>
                    <p>At bit bank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                </div>
                <div>
                    <div>
                        {
                            cases.map( value => (
                                <div key={value.id} >
                                    {value.text}
                                </div>
                            ) )
                        }
                    </div>
                    <div>
                        <h5>for individuals</h5>
                        <p>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                        <div>
                            {
                                percent.map( value => (
                                    <div key={value.id} >
                                        <h4>{value.numb}%</h4>
                                        <p>{value.text}</p>
                                    </div>
                                ) )
                            }
                        </div>
                        <button>learn more</button>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>For Business</h5>
                        <p> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, bit bank is committed to providing the right tools and support to achieve them</p>
                        <div>
                            {
                                percent.map( value => (
                                    <div key={value.id} >
                                        <h4>{value.numb}%</h4>
                                        <p>{value.text}</p>
                                    </div>
                                ) )
                            }
                        </div>
                        <button>learn more</button>
                    </div>
                    <div>
                        {
                            cases.map( value => (
                                <div key={value.id} >
                                    {value.text}
                                </div>
                            ) )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cases;