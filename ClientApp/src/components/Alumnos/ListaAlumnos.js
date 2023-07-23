import { Button, Table } from "reactstrap"

const ListaAlumnos = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarAlumno }) => {

    const enviarDatos = (alumno) => {
        setEditar(alumno)
        setMostrarModal(!mostrarModal)
    }

    return (

        <Table striped responsive>
            <thead>
                <tr>
                    <th>Cve. Alumno</th>
                    <th>Nombre</th>
                    <th>Ap. Paterno</th>
                    <th>Ap. Materno</th>
                    <th>Sexo</th>
                    <th>Grado</th>
                    <th>Grupo</th>
                    <th>Fecha Inscripcion</th>
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
                            <tr key={item.idAlumno}>
                                <td>{item.cveAlumno}</td>
                                <td>{item.nombre}</td>
                                <td>{item.apPaterno}</td>
                                <td>{item.apMaterno}</td>
                                <td>{item.sexo}</td>
                                <td>{item.grado}</td>
                                <td>{item.grupo}</td>
                                <td>{item.fechaInscripcion}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Calificaciones</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarAlumno(item.idContacto)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )

}

export default ListaAlumnos;