function FamilyInfo({ data }) {
    return (
        <ul>
            {
                data.map((elem) => {
                    return (
                        <li>
                            <h3>Name: {elem.name} Age:{elem.age}</h3>
                        </li>
                    );
                }
                )

            }

        </ul>
    );
}

export default FamilyInfo;