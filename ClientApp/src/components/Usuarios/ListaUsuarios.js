import { Button, Table } from "reactstrap"

const ListaUsuarios = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarUsuario }) => {

    const enviarDatos = (usuario) => {
        setEditar(usuario)
        setMostrarModal(!mostrarModal)
    }

    return (

        <Table striped responsive>
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Password</th>
                    <th>Rol</th>                  
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
                            <tr key={item.idUsuario}>
                                <td>{item.usuario1}</td>
                                <td>{item.password}</td>
                                <td>{item.rol}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarUsuario(item.idContacto)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )

}

export default ListaUsuarios;