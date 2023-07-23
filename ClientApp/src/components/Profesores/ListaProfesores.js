import { Button, Table } from "reactstrap"

const ListaProfesores= ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProfesor }) => {

    const enviarDatos = (profesor) => {
        setEditar(profesor)
        setMostrarModal(!mostrarModal)
    }

    return (

        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Ap. Paterno</th>
                    <th>Ap. Materno</th>                  
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.idProfesor}>
                                <td>{item.nombre}</td>
                                <td>{item.apPaterno}</td>
                                <td>{item.apMaterno}</td>                                
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>                                    
                                    <Button color="danger" size="sm" onClick={() => eliminarProfesor(item.idProfesor)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )

}

export default ListaProfesores;