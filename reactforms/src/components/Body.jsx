const Body = (props) => {
    // console.log(props.user);

    return (
        <tr>
            <th>{props.user.name}</th>
            <th>{props.user.address}</th>
            <th>{props.user.age}</th>
            <th>{props.user.salary}</th>
            <th>{props.user.department}</th>
            <th>{props.user.married}</th>
        </tr>
    );
}

export { Body };