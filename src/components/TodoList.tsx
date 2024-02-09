export default function TodoList(props: any) {
    return (
        <section>
            <h1>Tasks to do</h1>
            <table className="">
                <tbody>
                {props.list.map((item: any) =>
                    <tr key={item.key}>
                        <td> {item.done && <del>{item.title}</del>}
                            {!item.done && item.title}

                        </td>
                        <td>
                            <button className="" title="Mark as done" disabled={item.done} onClick={(event) => props.setDone(item.key) }> WOW</button></td>
                        <td>
                            <button className="" title="Delete nahui"> OH NOOOOO</button>
                        </td>
                    </tr>

                )}
                </tbody>
            </table>
        </section>
    );
}